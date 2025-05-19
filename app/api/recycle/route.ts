import { NextRequest, NextResponse } from "next/server"
import ConnectDB from "@/app/api/connection/connection"
import RecycleModel from "@/app/api/models/recycle"
import { verify } from "@/app/api/auth/jsonwebtoken"

export async function GET (request: NextRequest) {
    try {
        const token:string|null = request.headers.get('Authorization')
        if (token) {
            const result = verify(token)
            if (result.success) {

                await ConnectDB()
                const result = await RecycleModel.find({})
                .sort({ time: - 1 })
                .lean()
                return NextResponse.json({ success: true, result })
            }

            if (result.error) throw new Error('Error: jsonwebtoken inválido')
        }
        throw new Error('Error: default')
    
    } catch (error) {
        console.log("Error en api/crud/recycle")
        console.log(error)
        return NextResponse.json({ success: false, error })
    }
}
