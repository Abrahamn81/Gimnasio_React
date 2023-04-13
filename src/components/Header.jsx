import React from "react";
import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <h1>Bienvenid@s al Gimnasio</h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
