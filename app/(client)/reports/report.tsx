"use client"
import styles from "@/app/(client)/styles/reports.module.css"
import ReportInterface from "@/app/interfaces/report"
import Link from "next/link"

export default function Report ({ report }:{ report: ReportInterface }) {
    const genres = ['','Policiales','Judiciales','Destacado Policiales','Destacado Judiciales']
    
    return <Link href={`/${report._id}`}>
    <article className={styles.report}>
        <figure>
            <img src={report.image.thumb}/>
        </figure>
        <div className={styles.content}>
            <h3>{report.title}</h3>
            { report.genre != 0 && <p className={styles.genre}>{genres[report.genre]}</p> }
        </div>
    </article>
    </Link>
} 