"use client"
import Constructor from "@/app/(admin)/components/constructor/constructor"
import StoreConstructor from "@/app/stores/constructor"

export default function Update () {
    const { get_full } = StoreConstructor()

    const upload = async () => {
        try {
            const report = get_full()
            console.log("Report a actualizar:", report)

            const response = await fetch("api/update", {
                method: "put", 
                body: JSON.stringify(report)
            })
            const result = await response.json()

            if (result.success) alert("Reporte editado")
            if (result.error) {
                alert("response fetch error")
                console.log(result.error)
            }
            
        } catch (error) {
            alert("try catch error")
            console.log(error)    
        }
    }

    return <section>
        <Constructor />
        <button onClick={upload}>Actualizar noticia</button>
    </section>
}