"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Title () {
    const { title, set_title } = StoreConstructor()

    return <fieldset>
    <legend>Título</legend>
    <input 
    type="text"
    value={title}
    onChange={(e)=>{set_title(e.target.value)}}
    />
</fieldset>
}