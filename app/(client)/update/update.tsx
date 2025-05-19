"use client"
import StoreClient from "@/app/stores/client"
import { useEffect } from "react"

export default function Update () {
    const { request, inc_request, set_reports, reports } = StoreClient()

    const update_news = async () => {
        try {
            const response = await fetch(`api/read?page=${request}`)
            const result = await response.json()
            if (result.success) {
                inc_request()
                set_reports(result.data)
                console.log(result.data)
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
        if (!reports.length) update_news()
    }, []) 

    return <button onClick={update_news}>Cargar más noticias</button>
}