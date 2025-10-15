import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Layout";
import Home from "../src/pages/Home";

function Perfil() {
  return <div className="p-6">Página de Perfil</div>;
}

function Carrinho() {
  return <div className="p-6">Página do Carrinho</div>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
