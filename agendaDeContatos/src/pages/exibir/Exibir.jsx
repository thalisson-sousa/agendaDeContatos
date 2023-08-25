import styles from "./Exibir.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { BsTelephone, BsFillPersonFill, BsPencilSquare } from "react-icons/bs";
import { useLocation } from "react-router-dom";

export default function Exibir() {
  const navigate = useNavigate();

  let { state } = useLocation();
  const id = state.id;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .put(`https://agendadecontatosapi.onrender.com/contato/${id}`, data)
      .then(navigate("/"));
  };

  async function getApi() {
    return await axios.get(
      `https://agendadecontatosapi.onrender.com/contato/${id}`
    );
  }

  const { isLoading, isError, data } = useQuery([], () => getApi());

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
    <div className={styles.Container}>

      <div className={styles.Icon}> <Link to='/edit' state={{id: id}}> <BsPencilSquare/> </Link> </div>

      <div className={styles.ContainerImage}>
        <img
          src="https://jbs.com.br/wp-content/uploads/2019/10/icon01_contato_jbs.png"
          alt="perfil"
        />
      </div>
      <input
        type="image"
        name="imgURL"
        value="https://jbs.com.br/wp-content/uploads/2019/10/icon01_contato_jbs.png"
        className={styles.inputImage}
        {...register("imgURL")}
      />
      <div>
        <BsFillPersonFill />
        <input
          type="text"
          name="nome"
          value={data.data.nome}
          placeholder="Nome"
          {...register("nome")}
        />
      </div>
      <div>
        <BsFillPersonFill />
        <input
          type="text"
          name="sobrenome"
          value={data.data.sobrenome}
          placeholder="Sobrenome"
          {...register("sobrenome")}
        />
      </div>
      <div>
        <BsTelephone />
        <input
          type="number"
          name="contato"
          value={data.data.contato}
          placeholder="Telefone"
          {...register("contato")}
        />
      </div>
      <div>
        <input
          type="button"
          name="submit"
          value="Salvar"
          className={styles.Submit}
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
    </div>
  );
}
