"use client"
import StoreConstructor from "@/app/stores/constructor"

export default function Image () {
    const { image, set_image } = StoreConstructor()

    const upload_image = async (form: FormData) => {

        const response = await fetch('api/upload_img',{
            headers: new Headers({ 
                "Authorization": localStorage.getItem("jwt") || ''
            }),
            method: 'post',
            body: form 
        })
        const result = await response.json()
        if (result.success) {
            set_image(result.data)
        }
        if (result.error) {
            alert('Error cargando imágen')
            console.log(result.error)
        }
    }    
    const set_local_image = (event: React.ChangeEvent<HTMLInputElement>) => {
        set_image({
            ...image,
            [event.target.name]: event.target.value
        })
    }
    return <fieldset> 
    <legend>Imágen</legend>
    <details>
        <summary>Información de imagen cargada en local</summary>
        <input 
        type="text"
        name="id"
        value={image.id}
        placeholder="id"
        onChange={set_local_image}
        />
        <input 
        type="text"
        name="image"
        placeholder="url imagen"
        value={image.image}
        onChange={set_local_image}
        />
        <input 
        type="text"
        name="thumb"
        placeholder="url miniatura"
        value={image.thumb}
        onChange={set_local_image}
        />
    </details>

    <form action={upload_image}>
    <input 
    type="file"
    name="image"
    disabled={ image.id ? true : false }
    />
    <input
    type="submit"
    disabled={ image.id ? true : false }
    value={ image.id ? "Imagen cargada con éxito" : "Cargar imágen a internet" }
    />
    </form>
    
</fieldset>
}