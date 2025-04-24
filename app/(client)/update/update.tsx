"use client"
import { Client } from "@/app/stores/client"
import { useEffect } from "react"

export default function Update () {
    const { querys, set_querys, set_news } = Client()

    const update_news = async () => {
        try {
            const response = await fetch(`api/crud/read?page=${querys}`)
            const result = await response.json()
            if (result.success) {
                set_querys(querys + 1)
                console.log(result)
            }
            if (result.error) {
                console.log("Error:")
                console.log(result.error)
            }
        } catch (error) {
            alert("Error: en request, componente: client/update/update")
        }
    }
    useEffect(()=>{
        update_news()
    }, [])

    return <button onClick={update_news}>Más noticias</button>
}