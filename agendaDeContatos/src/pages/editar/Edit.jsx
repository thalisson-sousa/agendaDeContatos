import styles from "./Edit.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsTelephone, BsFillPersonFill } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();

  let { state } = useLocation();
  const id = state.id;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .put(`https://agendadecontatosapi.onrender.com/contato/${id}`, data)
      .then(navigate("/"));
  };

  return (
    <div className={styles.Container}>

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
          placeholder="Nome"
          {...register("nome")}
        />
      </div>
      <div>
        <BsFillPersonFill />
        <input
          type="text"
          name="sobrenome"
          placeholder="Sobrenome"
          {...register("sobrenome")}
        />
      </div>
      <div>
        <BsTelephone />
        <input
          type="number"
          name="contato"
          placeholder="Telefone"
          {...register("contato")}
        />
      </div>
      <div>
        <FaRegPaperPlane className={styles.submitIcon} />
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
