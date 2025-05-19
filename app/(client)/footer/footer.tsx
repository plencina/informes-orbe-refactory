import styles from "@/app/(client)/styles/footer.module.css"
import { SiFacebook, SiGmail } from "react-icons/si";

export default function Footer () {
    return <footer className={styles.main}>
        <div className={styles.left}>
            <h3>Informes Orbe</h3>
            <p>Página de informaciones Policiales & Judiciales</p>
            <p>Desde 1970 Periodismo profesional</p>
            <p>Gualeguaychú, Entre Ríos, Argentina</p>
        </div>
        <div className={styles.right}>
            <h3>Nuestras redes</h3>
            <span>
                <a href="https://www.facebook.com/ORBENews2020?locale=es_LA" target="_blank"><SiFacebook /></a>
                <a href="mailto:orbenoticias1945@gmail.com" target="_blank"><SiGmail /></a>
            </span>
        </div> 
    </footer>
}   