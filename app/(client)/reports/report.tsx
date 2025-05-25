"use client"
import styles from "@/app/(client)/styles/reports.module.css"
import ReportInterface from "@/app/interfaces/report"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Report ({ report, index }:{ report: ReportInterface, index: number }) {
    const genres = ['','Policiales','Judiciales','Destacado Policiales','Destacado Judiciales']
    const [ visible, set_visible ] = useState<boolean>(false)

    useEffect(()=>{
        const time_delay = index + 50
        setTimeout(()=>{
            set_visible(true)
        }, time_delay)
    }, [])
    
    return <Link href={`/${report._id}`}>
    <article className={`${styles.report} ${visible && styles.visible}`}>
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