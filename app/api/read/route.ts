import { NextRequest, NextResponse } from "next/server"
import ConnectDB from "@/app/api/connection/connection"
import ReportModel from "@/app/api/models/report"

export async function GET (request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        let page: string|null = searchParams.get('page')
        if (!page) throw new Error('Error: query parameter page inválido')
        let skip: number = (Number(page) - 1) * 40

        await ConnectDB() 
        const result = await ReportModel.find()
        .sort({ hora_subida: - 1 })
        .skip(skip)
        .limit(40)
        .lean()
        return NextResponse.json({ success: true, result })
    
    } catch (error) {
        console.log("Error en api/crud/read")
        console.log(error)
        return NextResponse.json({ success: false, error })
    }
} 