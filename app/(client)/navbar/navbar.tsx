import styles from "@/app/(client)/styles/navbar.module.css"
import Link from "next/link"

export default function Navbar () {
    return <nav className={styles.main}>
        <Link
        href={"/"}
        ><h3>Informes Orbe</h3></Link>
        <p className={styles.desktop}>Policiales & Judiciales de Entre Ríos, desde 1970 periodismo profesional, Gualeguaychú</p>
    </nav>
}