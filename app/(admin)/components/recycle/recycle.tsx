"use client"
import styles from "@/app/(admin)/styles/reports.module.css"
import StoreAdmin from "@/app/stores/admin"
import Report from "@/app/(admin)/components/read/report"

export default function Recycle () {
    const { add_reports, reports, reset } = StoreAdmin()

    const download = async () => {
        try {
            const response = await fetch(`api/recycle`, {
                headers: new Headers({
                    "Authorization": localStorage.getItem('jwt') || ''
                })
            })

            const result = await response.json()
            if (result.success) {
                add_reports(result.result)
            }
            if (result.error) {
                alert("Error en respuesta de api")
                console.log(result.error)
            }
            
        } catch (error) {
            alert("Error en trycatch")
            console.log(error)
        }
    }

    return <section className={styles.main}>
        <span className={styles.title}><p>PAPELERA</p><button onClick={reset}>Reset</button></span>
        <button onClick={download}>Obtener noticias, { reports.length } noticias totales) </button>
        {
        reports && reports.map(
            (report, index) => <Report key={index} report={report} />)    
        }
    </section>
}