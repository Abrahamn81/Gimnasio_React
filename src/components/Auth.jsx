import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <p>
      🙃
      <Link to={`/user/${user.id}`}>{user.name}</Link>
      <button className="custom-button" onClick={() => logout()}>
        Cerrar sesión
      </button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to="/login">Iniciar sesión</Link>
      </li>
      <li>
        <Link to="/register">Registrarse</Link>
      </li>
    </ul>
  );
};
