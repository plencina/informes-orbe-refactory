"use client"
import styles from "@/app/(client)/styles/reports.module.css"
import StoreClient from "@/app/stores/client"
import Report from "@/app/(client)/reports/report"
import Loading from "@/app/(client)/reports/loading"


export default function Reports () {
    const { reports } = StoreClient()
    return <section className={styles.main}>
        {
            reports.length >= 1 ?
            reports.map(report => <Report report={report} key={report.time} />):
            <Loading />
        }
    </section>
}