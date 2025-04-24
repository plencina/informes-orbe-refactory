"use client"
import styles from "@/app/(admin)/styles/dashboard.module.css"
import Viewer from "@/app/(admin)/components/viewer/viewer"
import Controls from "@/app/(admin)/components/controls/controls"
import { useEffect } from "react"

export default function Dashboard () {
    useEffect(()=>{
        const local_jwt: string | boolean = localStorage.getItem("jwt") || false
        if (!local_jwt) alert('no hay jwt en local storage')
    },[])

    return <main className={styles.main}>
        <Controls />
        <Viewer />
    </main>
} 