import './App.css';
import Search from './components/search/Search';
import Contatos from './pages/contatos/Contatos';
import FooterLinks from './components/footer/FooterLinks';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from './pages/favoritos/Favoritos';
import Recentes from './pages/recentes/Recentes';
import Cadastro from './pages/cadastro/Cadastro';

function App() {

  return (
    <>
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path='/' element={<Contatos/>} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="recentes" element={<Recentes />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
      <section className="footer">
        <FooterLinks />
      </section>
    </BrowserRouter>
    </>
  )
}

export default App
