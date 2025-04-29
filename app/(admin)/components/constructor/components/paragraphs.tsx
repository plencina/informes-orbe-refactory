"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Paragraphs () {
    const { paragraphs, set_paragraphs } = StoreConstructor()

    return <fieldset>
    <legend>Párrafos</legend>
    <textarea
    value={paragraphs}
    onChange={(e)=>{set_paragraphs(e.target.value)}}
    ></textarea>
</fieldset>
}