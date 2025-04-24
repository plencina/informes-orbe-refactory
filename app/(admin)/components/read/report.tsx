"use client"
import styles from "@/app/(admin)/styles/reports.module.css"
import ReportInterface from "@/app/interfaces/report"
import StoreConstructor from "@/app/stores/constructor"
import StoreAdmin from "@/app/stores/admin"

export default function Report ({ report }:{ report: ReportInterface }) {
    const { set_full } = StoreConstructor()
    const { set_viewer } = StoreAdmin()

    const edit_report = () => {
        report.parrafos = (report.parrafos as string[]).join('\n')
        set_full(report)
        set_viewer("update")
    }
    const delete_report = async () => {
        try {
            const response = await fetch(`api/delete?id=${report._id}`, {
                method:"DELETE"
            })
            const result = await response.json()
            if (result.success) {
                alert("Reporte eliminado")
                console.log(result.result)
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

    return <fieldset className={styles.report}>
        <p>{report.titulo}</p>
        <span>
        <button onClick={edit_report}>Editar</button>
        <button onClick={delete_report}>Eliminar</button>
        </span>
    </fieldset>
}