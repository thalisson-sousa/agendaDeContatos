import styles from "./Search.module.css";

import { MdSearch } from "react-icons/md";
import { BsMic } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

export default function Search() {
  return (
    <div className={styles.Container}>
      <input
        className={styles.Search}
        type="search"
        placeholder="Pesquise contatos e lugares"
      />
      <MdSearch className={styles.Icon} />
      <BsMic className={styles.Icon_mic} />
      <CiMenuKebab className={styles.Icon_drop} />
    </div>
  );
}
