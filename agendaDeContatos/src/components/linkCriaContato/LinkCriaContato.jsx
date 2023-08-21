import styles from './LinkCriaContato.module.css';
import {MdOutlinePersonAddAlt} from 'react-icons/md';

export default function CriaContato() {
    return (
        <div className={styles.Container}>
            <MdOutlinePersonAddAlt/>
            <h2>Criar novo contato</h2>
        </div>
    );
}