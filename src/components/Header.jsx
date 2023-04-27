import { Link } from "react-router-dom";

import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <h1>Gympp 🏋🏽‍♀️</h1>
      <nav>
        <Auth />
      </nav>

      <Link to="/">
        <button className="logo-m"></button>
      </Link>
    </header>
  );
};
