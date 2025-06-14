"use client"
import styles from "@/app/(client)/styles/header.module.css"
import Marquee from "react-fast-marquee"

export default function Header () {

    return <div className={styles.main}>
        {
            //<p className={styles.alert}>🆕 Actualizando la web, las noticias pueden no estar al día 🆕</p>
        }
        <img 
        src="img1.jpg"
        alt="Alerta sobre el mosquito dengue"
        />
        <Marquee className={styles.marquee} pauseOnHover={true} speed={30}>
            <p>Teléfonos útiles en Gualeguaychú:</p>
            <p>100 Bomberos</p>
            <p>101 Policía</p>
            <p>103 Defensa Civil</p>
            <p>105 Ambiental</p>
            <p>106 Náutica</p>
            <p>107 Hospital</p>
        </Marquee>
    </div>
}
