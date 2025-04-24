"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Paragraphs () {
    const { parrafos, set_parrafos } = StoreConstructor()

    return <fieldset>
    <legend>Párrafos</legend>
    <textarea
    value={parrafos}
    onChange={(e)=>{set_parrafos(e.target.value)}}
    ></textarea>
</fieldset>
}