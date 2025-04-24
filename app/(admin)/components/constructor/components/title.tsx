"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Title () {
    const { _id, set_id } = StoreConstructor()

    return <fieldset>
    <legend>id</legend>
    <input 
    type="text"
    value={_id}
    onChange={(e)=>{set_id(e.target.value)}}
    />
</fieldset>
}