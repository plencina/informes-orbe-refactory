import jwt from "jsonwebtoken";

export const generate = () => {
    try {
        const KEY: string = process.env.JSONWEBTOKEN_KEY || ''
        if (!KEY) throw new Error("Error obteniendo variable de entorno jwt, componente: api/auth/jsonwebtoken")

        const token = jwt.sign({}, KEY, { expiresIn: "1h" })
        return ({ success: true, token })

    } catch (error) {
        console.log("Error en componente: api/auth/jsonwebtoken")
        console.log(error)
        return ({ success: false, error })
    }
}

export const verify = (token: string) => {
    try {
        const KEY: string|undefined = process.env.JSONWEBTOKEN_KEY
        if (!KEY) throw new Error("Error obteniendo variable de entorno jwt, componente: api/auth/jsonwebtoken")

        jwt.verify(token, KEY)
        return ({ success: true })

    } catch (error) {
        console.log("Error en componente: api/auth/jsonwebtoken")
        console.log(error)
        return ({ success: false, error })
    }
}