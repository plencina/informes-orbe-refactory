"use client"
import styles from "@/app/(admin)/styles/controls.module.css"
import StoreAdmin from "@/app/stores/admin"


export default function Controls () {
    const { set_viewer } = StoreAdmin()

    const view_upload = () => {set_viewer("create")}
    const view_reports = () => {set_viewer("reports")}
    const view_recycle = () => {set_viewer("recycle")}

    return <section className={styles.main}>
        <button onClick={view_upload}>Agregar noticia</button>
        <button onClick={view_reports}>Noticias subidas</button>
        <button onClick={view_recycle}>Papelera de reciclaje</button>
        <p><b>dashboard</b></p>
    </section>
}