"use client"
import styles from "@/app/(admin)/styles/controls.module.css"
import StoreAdmin from "@/app/stores/admin"
import { useEffect, useRef, useState } from "react"


export default function Controls () {
    const { set_viewer } = StoreAdmin()
    const [sidebar, set_sidebar] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const view_upload = () => {set_viewer("create")}
    const view_reports = () => {set_viewer("reports")}
    const view_recycle = () => {set_viewer("recycle")}


    useEffect(()=>{
        if (ref.current != null) {
            if (sidebar) {
                ref.current.style.top = '0'
            } else {
                ref.current.style.top = '-5.55rem'
            }
        }
    }, [sidebar])
    const toggle_sidebar = () => set_sidebar(!sidebar)

    return <section ref={ref} className={styles.main}>
        <button 
        onClick={toggle_sidebar}
        className={styles.button_sidebar}
        >III</button>
        <button onClick={view_upload}>Agregar noticia</button>
        <button onClick={view_reports}>Noticias subidas</button>
        <button onClick={view_recycle}>Papelera de reciclaje</button>
        <p><b>dashboard</b></p>
    </section>
}