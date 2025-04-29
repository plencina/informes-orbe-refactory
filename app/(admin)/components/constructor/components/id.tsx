"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Id () {
    const { _id } = StoreConstructor()

    return <fieldset>
    <legend>ID</legend>
    <input 
    type="text"
    value={_id}
    readOnly
    />
</fieldset>
}