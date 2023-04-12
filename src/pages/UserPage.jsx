import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { useUser } from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h2>Nombre: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Fecha de registro: {new Date(user.createdAt).toDateString()}</p>
      {user ? (
        <section className="editUser-button">
          <ul className="btn-editUser">
            <li>
              <Link to={`/user/${user.id}/edit`} state={user}>
                <button className="edit-button" title="Editar usuario"></button>
              </Link>
            </li>
          </ul>
        </section>
      ) : null}
    </section>
  );
};
