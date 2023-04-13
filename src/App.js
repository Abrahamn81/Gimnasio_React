import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<p>Estamos en la home</p>} />
        <Route path="/register" element={<p>Formulario de registro</p>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
