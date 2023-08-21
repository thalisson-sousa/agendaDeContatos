import styles from "./FooterLinks.module.css";

import { Link } from "react-router-dom";

import { BsStar } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";

export default function FooterLinks() {
  return (
    <div className={styles.Container}>
      <div className={styles.btn}>
        <Link to="./favoritos">
          <BsStar className={styles.icone} />
          <p>Favoritos</p>
        </Link>
      </div>
      <div className={styles.btn}>
        <Link to="./recentes">
          <GoClock className={styles.icone} />
          <p>Recentes</p>
        </Link>
      </div>
      <div className={styles.btn}>
        <Link to="./">
          <IoMdContacts className={styles.icone} />
          <p>Contatos</p>
        </Link>
      </div>
    </div>
  );
}
