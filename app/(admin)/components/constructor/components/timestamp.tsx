"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Timestamp () {
    const { hora_subida } = StoreConstructor()

    return <fieldset>
    <legend>Hora de subida</legend>
    <p>{ hora_subida ? new Date(hora_subida).toLocaleString() : "sin definir" }</p>
</fieldset>
}





