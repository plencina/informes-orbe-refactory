"use client"
import styles from "@/app/styles/page.module.css";
import Update from "@/app/(client)/update/update";
import ReportInterface from "@/app/interfaces/report"

// constructor component
export default function Home() {
  const download = async () => {
    const response = await fetch('api/read?page=1')
    const result = await response.json()
    if (result.success) console.log(result.result)
    if (result.error) console.log(result.error)
  }
return <div className={styles.main}>  
  <h1>INFORMES ORBE, actualizando frontend</h1>
  </div>
}
// <Update />  component

