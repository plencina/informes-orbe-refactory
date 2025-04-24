"use client"
import Constructor from "@/app/(admin)/components/constructor/constructor"
import StoreConstructor from "@/app/stores/constructor"
 
export default function Upload () {
    const { get_full } = StoreConstructor()

    const upload = async () => {
        const token: string = localStorage.getItem("jwt") || ''
        try {
            const report = get_full()
            console.log("Report a subir:", report)

            const response = await fetch("api/create", {
                headers: new Headers({
                    "Authorization": token
                }),
                method: "post",
                body: JSON.stringify(report)
            })
            const result = await response.json()

            if (result.success) alert("Reporte subido con éxito")
            if (result.error) {
                alert("Error en respuesta de api")
                console.log(result.error)
            }
        
        } catch (error) {
            alert("try catch error")
            console.log(error)    
        }
    }

    return <section>
        <Constructor />
        <button onClick={upload}>Subir Noticia</button>
    </section>
}
