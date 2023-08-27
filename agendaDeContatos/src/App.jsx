import "./App.css";
import Search from "./components/search/Search";
import Contatos from "./pages/contatos/Contatos";
import FooterLinks from "./components/footer/FooterLinks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/favoritos/Favoritos";
import Recentes from "./pages/recentes/Recentes";
import Cadastro from "./pages/cadastro/Cadastro";
import Exibir from "./pages/exibir/Exibir";
import Edit from "./pages/editar/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Search />
        <div className="screens">
          <Routes>
            <Route path="/" element={<Contatos />} />
            <Route path="exibir" element={<Exibir />} />
            <Route path="edit" element={<Edit />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="recentes" element={<Recentes />} />
            <Route path="cadastro" element={<Cadastro />} />
          </Routes>
          <section className="footer">
            <FooterLinks />
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
