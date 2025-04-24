import { NextRequest, NextResponse } from "next/server"
import ConnectDB from "@/app/api/connection/connection"
import ReportModel from "@/app/api/models/report"
import RecycleModel from "@/app/api/models/recycle"
import { verify } from "@/app/api/auth/jsonwebtoken"

export async function DELETE (request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        let id: string|null = searchParams.get("id")
        if (!id) throw new Error("Error: obteniendo parámetros de búsqueda, componente: api/crud/delete")
        
        const token: string|null = request.headers.get('Authorization')
        if (token) {
            const result = verify(token)
            if (result.success) {

                await ConnectDB()
                const report = await ReportModel.findById(id).lean()
                const recycling_report = new RecycleModel(report)
                await recycling_report.save()
                const result = await ReportModel.findByIdAndDelete(id)
                return NextResponse.json({ success: true, result })
            
            }
            if (result.error) throw new Error('Error: jsonwebtoken inválido')
        }
        throw new Error('Error: default')
    
    } catch (error) {
        console.log("Error en api/crud/delete:")
        console.log(error)
        return NextResponse.json({ success: false, error })
    }
}