import { Link } from "react-router-dom";

import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <h1>Bienvenid@s al Gimnasio</h1>
      <nav>
        <Auth />
      </nav>
      <h2>
        {/*         <Link to="/">Volver al listado de ejercicios</Link> */}
        <Link to="/">
          <button
            className="start-button"
            title="Volver al listado de ejercicios"
          ></button>
        </Link>
      </h2>
    </header>
  );
};
