import {
  AddClientModal,
  ClientsTable,
  Projects,
  AddProjectModal,
} from "../components";

function Home() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mt-3">Projects</h2>
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mt-3">Clients</h2>
        <AddClientModal />
      </div>
      <ClientsTable />
    </>
  );
}

export default Home;
