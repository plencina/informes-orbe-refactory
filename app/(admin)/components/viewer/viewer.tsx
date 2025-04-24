"use client"
import styles from "@/app/(admin)/styles/viewer.module.css"
import StoreAdmin from "@/app/stores/admin"

import Create from "@/app/(admin)/components/create/create"
import Read from "@/app/(admin)/components/read/read"
import Update from "@/app/(admin)/components/update/update"
import Recycle from "@/app/(admin)/components/recycle/recycle"

export default function Viewer () {
    const { viewer } = StoreAdmin()

    return <section className={styles.main}>
        {
            viewer == "create"  ? <Create />    :
            viewer == "reports" ? <Read />      :
            viewer == "update"  ? <Update />    :
            viewer == "recycle" ? <Recycle />   :
            <p>Dashboard</p>
        }
    </section>  
} 