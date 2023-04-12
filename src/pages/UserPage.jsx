import { useParams } from "react-router-dom";
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
    </section>
  );
};
