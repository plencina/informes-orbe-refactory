"use client"
import Constructor from "@/app/(admin)/components/constructor/constructor"
import StoreConstructor from "@/app/stores/constructor"
 
export default function Upload () {
    const { get_full } = StoreConstructor()

    const upload = async () => {
        try {
            const report = get_full()
            const response = await fetch("api/create", {
                headers: new Headers({
                    "Authorization": localStorage.getItem("jwt") || ''
                }),
                method: "POST",
                body: JSON.stringify(report)
            })
            const result = await response.json()

            if (result.success) {
                alert("Reporte subido con éxito")
                console.log(result.data)
            }
            if (result.error) {
                alert("Error en respuesta de api")
                console.log(result.error)
            }
        } catch (error) {
            console.log('Error en trycatch')
            console.log(error)
        }
    }

    return <section>
        <Constructor />
        <button onClick={upload}>Subir Noticia</button>
    </section>
}
