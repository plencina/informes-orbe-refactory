import { NextRequest, NextResponse } from "next/server"
import ConnectDB from "@/app/api/connection/connection"
import ReportInterface from "@/app/interfaces/report"
import ReportModel from "@/app/api/models/report"
import { verify } from "@/app/api/auth/jsonwebtoken"

export async function PUT (request: NextRequest) {
    try {
      const token: string|null = request.headers.get('Authorization')
      if (token) {
        const result = verify(token)
        if (result.success) {

          const body: ReportInterface = await request.json()
          await ConnectDB()
          const result = await ReportModel.findByIdAndUpdate(body._id, body)
          return NextResponse.json({ success: true, data: result })
        
        }
        if (result.error) throw new Error('Error: jsonwebtoken inválido')
      }
      throw new Error('Error: default')

    } catch (error) {
      console.log("Error en api/crud/update:")
      console.log(error)
      return NextResponse.json({ succes: false, error }) 
    }
}