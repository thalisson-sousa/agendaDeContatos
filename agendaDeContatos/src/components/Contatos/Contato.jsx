import styles from './Contato.module.css';

// eslint-disable-next-line react/prop-types
export default function Contato({id, imgURL, nome, sobrenome, bgColor}) {
    return (
        <div className={styles.CardContato} key={id}>
          <img className={styles.ContatoImagem} src={imgURL} alt={nome} style={{ backgroundColor: bgColor }} />
          <p className={styles.ContatoTitulo}>{nome} {sobrenome}</p>
        </div>
    )
}