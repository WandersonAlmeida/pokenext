import Link from "next/link";
import Image from "next/image";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
        quis exercitationem culpa nesciunt nihil aut nostrum explicabo
        reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
        Voluptatum ducimus voluptates voluptas?
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Imagem do pokemon Charizard"
      />
     
    </div>
  );
}
