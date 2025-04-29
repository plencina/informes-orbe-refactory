import { NextRequest, NextResponse } from "next/server";
import { generate } from "@/app/api/auth/jsonwebtoken";

export async function POST (request: NextRequest) {
    try {
        const { user, password } = await request.json()
        if ( user === process.env.LOGIN_USER && password === process.env.LOGIN_PASSWORD ) {

            const result = generate()
            if (result.success) return NextResponse.json({ success: true, token: result.token })
            if (result.error) throw new Error('Error: Generando token')
        } else {

            throw new Error('Error: Credenciales incorrectas')
        }
        return NextResponse.json({ success: false, error: "Respuesta default" })

    } catch (error) {
        return NextResponse.json({ success: false, error })
    }
}