"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Timestamp () {
    const { time } = StoreConstructor()

    return <fieldset>
    <legend>Hora de subida</legend>
    <p>{ time ? new Date(time).toLocaleString() : "sin definir" }</p>
</fieldset>
}





