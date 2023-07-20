import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECT, GET_PROJECTS } from "../queries/projectQueries";

import { EditProjectForm, Spinner, ClientInfo, Button } from "../components";

import { DELETE_PROJECT } from "../mutations/projectMutations";

function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleDeleteProject = () => {
    deleteProject({ variables: { id: data.project.id } });
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;
  if (!data || !data.project) return <p>Project not found</p>;

  const { project } = data;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <Link to="/">
                <FaArrowLeft />
              </Link>
              <h1>{project.name}</h1>
            </div>
            <Button
              onClick={handleDeleteProject}
              text="Delete Project"
              icon={<FaTrash className="icon" />}
            />
          </div>
          <EditProjectForm project={project} />
          <ClientInfo client={project.client} />
        </div>
      )}
    </>
  );
}

export default Project;
