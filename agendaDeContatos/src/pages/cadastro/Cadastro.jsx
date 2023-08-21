import styles from "./Cadastro.module.css";
import { BsTelephone, BsFillPersonFill } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Cadastro() {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerImage}>
        <img
          src="https://jbs.com.br/wp-content/uploads/2019/10/icon01_contato_jbs.png"
          alt="perfil"
        />
      </div>
      <div>
        <BsFillPersonFill />
        <input type="text" name="nome" placeholder="Nome" />
      </div>
      <div>
        <BsFillPersonFill />
        <input type="text" name="sobrenome" placeholder="Sobrenome" />
      </div>
      <div>
        <BsTelephone />
        <input type="number" name="telefone" placeholder="Telefone" />
      </div>
      <div>
        <FaRegPaperPlane className={styles.submitIcon} />
        <input type="button" name="submit" value="Salvar" className={styles.Submit} />
      </div>
    </div>
  );
}
