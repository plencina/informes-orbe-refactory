"use client"
import styles from "@/app/(admin)/styles/constructor.module.css"
import StoreConstructor from "@/app/stores/constructor"

import Title from "@/app/(admin)/components/constructor/components/title"
import Paragraphs from "@/app/(admin)/components/constructor/components/paragraphs"
import Timestamp from "@/app/(admin)/components/constructor/components/timestamp"
import Genre from "@/app/(admin)/components/constructor/components/genre"
import Image from "@/app/(admin)/components/constructor/components/image"

export default function Constructor () {
    const { reset } = StoreConstructor()

    return <section className={styles.main}>
        <span className={styles.title}><p>CONSTRUCTOR</p><button onClick={reset}>Reset</button></span>
        
        <Title />
        <Image />
        <Paragraphs />
        <Timestamp />
        <Genre />

    </section>
}
