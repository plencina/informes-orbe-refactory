"use client"
import styles from "@/app/styles/page.module.css";
import Reports from "@/app/(client)/reports/reports";
import Header from "@/app/(client)/header/header";
import Update from "@/app/(client)/update/update";


export default function Home() {
return <div className={styles.main}>
  <Header />
  <Reports />
  <Update />
  </div>
}