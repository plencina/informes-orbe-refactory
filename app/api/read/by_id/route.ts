import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/app/api/connection/connection"
import ReportModel from "@/app/api/models/report"

export async function GET (request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const id: string | null = searchParams.get('id')
        if (!id) throw new Error('No se encotró identificador')
        await ConnectDB()
        const result = await ReportModel.findById(id)
        return NextResponse.json({ success: true, data: result })

    } catch (error) {
        return NextResponse.json({ success: false, error })
    }
}