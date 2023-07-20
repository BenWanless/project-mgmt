import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";

import { DELETE_CLIENT } from "../../../mutations/clientMutations";
import { GET_CLIENTS } from "../../../queries/clientsQueries";
import { GET_PROJECTS } from "../../../queries/projectQueries";

import { Button } from "../../Button";

function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <Button icon={<FaTrash />} onClick={deleteClient} />
      </td>
    </tr>
  );
}

export { ClientRow };
