"use client"
import styles from "@/app/(client)/styles/header.module.css"
import Marquee from "react-fast-marquee"
import StoreClient from "@/app/stores/client"
import { useEffect, useState } from "react"

export default function Header () {
    const [ last_update_time, set_last_update_time ] = useState<string>()
    const { reports }  = StoreClient()

    useEffect(()=>{
        if (reports.length) {
            const last_report = reports[0];
            const report_time = last_report.time;
            const time_parsed = new Date(report_time).toLocaleString()
            set_last_update_time(time_parsed)
        }
    }, [reports])

    return <div className={styles.main}>
        {
            //<p className={styles.alert}>🆕 Actualizando la web, las noticias pueden no estar al día 🆕</p>
        }
        <img 
        src="img1.jpg"
        alt="Alerta sobre el mosquito dengue"
        />
        {
            last_update_time ? <Marquee className={styles.marquee} pauseOnHover={true} speed={30}>
            <p>Última actualización: {last_update_time}</p>
            <p>Teléfonos útiles en Gualeguaychú:</p>
            <p>100 Bomberos</p>
            <p>101 Policía</p>
            <p>103 Defensa Civil</p>
            <p>105 Ambiental</p>
            <p>106 Náutica</p>
            <p>107 Hospital</p>
        </Marquee> :
        <div className={styles.marquee}></div> 
        }
    </div>
}
