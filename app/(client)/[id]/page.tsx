"use client"
import styles from "@/app/(client)/styles/dinamic_report.module.css";
import { v4 as getRandomID } from 'uuid'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import StoreClient from "@/app/stores/client";
import ReportInterface from "@/app/interfaces/report";
import Header from "@/app/(client)/header/header";
import Loading from "@/app/(client)/[id]/loading"

export default function Dynamic_route () {
  const [ report, set_report ] = useState<ReportInterface>()
  const { reports } = StoreClient()
  const params = useParams()
  const report_id = params.id

  const genres = ['Policiales', 'Judiciales', 'Destacados Policiales', 'Destacados Judiciales']
  const get_report_by_cache = () => {
    const filtered_report = reports.filter(report => report._id == report_id)[0]
    if (!report) return false
    set_report(filtered_report)
  }
  const get_report_by_request = async () => {
    const response = await fetch(`api/read/by_id?id=${report_id}`)
    const result = await response.json()
    if (result.success) set_report(result.data)
    if (result.error) alert('Error obteniendo reporte')
  }
  useEffect(()=>{
    const result = get_report_by_cache()
    if (!result) get_report_by_request()
  },[])

  return <> { report ? <main className={styles.main}>
    <section className={styles.report}>
      <Header />
      <h1>{report?.title}</h1>
      <hr />
      <figure> 
        <img
        src={report?.image.image}
        />
        <figcaption><i>Algunas imágenes son censuradas para proteger la identidad de las personas</i></figcaption>
      </figure>
      { (report && report?.genre != 0) && <p className={styles.genre}>{genres[report.genre]}</p>}
      <div className={styles.paragraphs}>
      {
        report?.paragraphs && (report?.paragraphs as string[]).map(item => <p key={getRandomID()}>{item}</p>)
      }
        <hr />
      </div>
    </section>
    <section className={styles.ads_one}>
    </section>
    <section className={styles.ads_two}>
      
    </section>
  </main> :
   <Loading />
  }
  </>
}
  // dentro de figure, figcaption es opcional, buena idea usar figcaption para aclarar el porque de proteger la gente