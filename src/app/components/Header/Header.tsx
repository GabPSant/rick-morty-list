import Image from "next/image";
import title from "../../../../img/rick-and-morty-title.jpg";
import styles from './header.module.css';

export default function Header(){
    return (
        <header id={styles.introducao}>
                <Image alt="imagem do titulo do rick and morty" src={title} height={200}/>
        </header>
    );
}