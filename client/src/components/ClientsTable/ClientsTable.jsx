import { useQuery } from "@apollo/client";

import { GET_CLIENTS } from "../../queries/clientsQueries";

import { ClientRow } from "./components";
import { Spinner } from "../Spinner";

export function ClientsTable() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      {!loading && !error && (
        <>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
