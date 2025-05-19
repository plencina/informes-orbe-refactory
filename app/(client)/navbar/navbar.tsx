import styles from "@/app/(client)/styles/navbar.module.css"
import Link from "next/link"

export default function Navbar () {
    return <nav className={styles.main}>
        <Link
        href={"/"}
        ><p className={styles.logo}>Informes orbe</p></Link>
        <p className={styles.desktop}>Policiales & Judiciales de Entre Ríos, desde 1970 periodismo profesional, Gualeguaychú</p>
    </nav>
}