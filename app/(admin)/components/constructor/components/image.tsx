"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Image () {
    const { imagen, set_imagen } = StoreConstructor()

    const upload_image = async (form: FormData) => {
        const token: string = localStorage.getItem("jwt") || ''

        const response = await fetch('api/upload_img',{
            headers: new Headers({ 
                "Authorization": token 
            }),
            method: 'post',
            body: form })

        const result = await response.json()
        console.log(result)
    }    
    return <fieldset> 
    <legend>Imágen</legend>
    <form action={upload_image}>
    <input 
    type="text"
    value={imagen}
    onChange={(e)=>{set_imagen(e.target.value)}}
    />
    <input 
    type="file"
    name="image"
    />
    <input
    type="submit"
    value={"Cargar imágen"}
    />
    </form>
    
</fieldset>
}