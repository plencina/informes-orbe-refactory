import { NextRequest, NextResponse } from "next/server"
import { verify } from "@/app/api/auth/jsonwebtoken"
import ConnectDB from "@/app/api/connection/connection"
import ReportInterface from "@/app/interfaces/report"
import ReportModel from "@/app/api/models/report"

export async function POST (request: NextRequest) {
    try {
      const token:string|null = request.headers.get('Authorization')
      if (token) {
        const result = verify(token)
        if (result.success) {

          const body: ReportInterface = await request.json()
          // eliminando el id que viene de constructor como un string vacio que no hace falta
          delete body._id
          await ConnectDB()
          const new_report = new ReportModel(body)
          const result = await new_report.save()
          return NextResponse.json({ success: true, result })
        
        }
        if (result.error) throw new Error('Error: jsonwebtoken inválido')
      }
      throw new Error('Error: default')

    } catch (error) {
      console.log("Error en api/crud/create:")
      console.log(error)
      return NextResponse.json({ succes: false, error }) 
    }
}