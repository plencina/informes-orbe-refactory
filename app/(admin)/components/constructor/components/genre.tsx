"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Timestamp () {
    const { genero, set_genero } = StoreConstructor()

    return <fieldset>
    <legend>Género</legend>
    
    <span>
    <input
    name="genero" 
    type="radio"
    checked={genero == "Policiales" ? true : false}
    onChange={(e)=>{e.target.checked && set_genero("Policiales")}}
    />
    <p>Policiales</p>
    </span>

    <span>
    <input 
    name="genero"
    type="radio"
    checked={genero == "Judiciales" ? true : false}
    onChange={(e)=>{e.target.checked && set_genero("Judiciales")}}
    />
    <p>Judiciales</p>
    </span>

</fieldset>
}


