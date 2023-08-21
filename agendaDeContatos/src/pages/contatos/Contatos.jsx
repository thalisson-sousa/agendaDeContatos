import styles from "./Contatos.module.css";
import CriaContato from "../../components/linkCriaContato/LinkCriaContato";
import Contato from '../../components/Contatos/Contato';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from "react-router-dom";

async function getApi() {
  return await axios.get('https://agendadecontatosapi.onrender.com/contatos');
}

export default function Contatos() {
  const { isLoading, isError, data } = useQuery(['contacts'], () => getApi());

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  if (!data || !data.data || data.data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className={styles.container}>
      <section>
        <Link to='./cadastro'>
        <CriaContato />
        </Link>
      </section>
      <section>
      <div className={styles.Corpo}>
      {data.data.map((contato) => (
        <Contato 
        key={contato.id} 
        id={contato.id} 
        imgURL={contato.imgURL} 
        nome={contato.nome} 
        sobrenome={contato.sobrenome}
        bgColor={"#" + ((1 << 24) * Math.random() | 0).toString(16)}
        />
      ))}
    </div>
      </section>
    </div>
  );
}
