"use client"
import Constructor from "@/app/(admin)/components/constructor/constructor"
import StoreConstructor from "@/app/stores/constructor"

export default function Update () {
    const { get_full } = StoreConstructor()

    const upload = async () => {
        try {
            const report = get_full() 
            const response = await fetch("api/update", {
                headers: new Headers({
                    'Authorization': localStorage.getItem('jwt') || ''
                }),
                method: "PUT",
                body: JSON.stringify(report) })
            const result = await response.json()

            if (result.success) {
                alert("Reporte editado con éxito")
                console.log(result.data)
            }
            if (result.error) {
                alert("response fetch error")
                console.log(result.error)
            }            
        } catch (error) {
            console.log('Error en trycatch')
            console.log(error)
        }
    }
        

    return <section>
        <Constructor />
        <button onClick={upload}>Actualizar noticia</button>
    </section>
}