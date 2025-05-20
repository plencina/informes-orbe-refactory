import styles from "@/app/(client)/styles/header.module.css"
export default function Header () {
    return <div className={styles.main}>
        <p className={styles.alert}>🆕 Actualizando la web, las noticias pueden no estar al día 🆕</p>
        <img 
        src="img1.jpg"
        alt="Alerta sobre el mosquito dengue"
        />
    </div>
}