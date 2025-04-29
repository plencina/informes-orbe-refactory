"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Genre () {
    const { genre, set_genre } = StoreConstructor()

    return <fieldset>
    <legend>Género</legend>
    
    <span>
    <input
    name="genre" 
    type="radio"
    checked={genre == 1 ? true : false}
    onChange={(e)=>{e.target.checked && set_genre(1)}}
    />
    <p>Policiales</p>
    </span>

    <span>
    <input 
    name="genre"
    type="radio"
    checked={genre == 2 ? true : false}
    onChange={(e)=>{e.target.checked && set_genre(2)}}
    />
    <p>Judiciales</p>
    </span>

</fieldset>
}


