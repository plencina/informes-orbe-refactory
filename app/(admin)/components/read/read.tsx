"use client"
import styles from "@/app/(admin)/styles/reports.module.css"
import StoreAdmin from "@/app/stores/admin"
import Report from "@/app/(admin)/components/read/report"

export default function Read () {
    const { add_reports, reports, reset, requests, sum_request } = StoreAdmin()

    const download = async () => {
        try {
            const response = await fetch(`api/read?page=${requests + 1}`)
            const result = await response.json()
            if (result.success) {
                sum_request()
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
        <span className={styles.title}><p>NOTICIAS</p><button onClick={reset}>Reset</button></span>
        <button onClick={download}>Obtener más noticias ({ requests } peticion/es, { reports.length } noticias totales) </button>
        {
        reports && reports.map(
            (report, index) => <Report key={index} report={report} />)    
        }
    </section>
}