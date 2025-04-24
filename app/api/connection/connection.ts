import mongoose from "mongoose";

interface MongoCache {
    conn: mongoose.Mongoose|undefined
    promise: Promise<mongoose.Mongoose>|undefined
}
let connection: MongoCache = {
    conn: undefined,
    promise: undefined
}

async function connect () : Promise<mongoose.Mongoose> {
    if (connection.conn) {
        return connection.conn
    }

    const MONGODB_URI: string|null = process.env.MONGODB_URI || null

    if (!MONGODB_URI) {
        throw new Error(`Error: obteniendo URI de MDB, URI: ${MONGODB_URI} (variable de entorno), componente: api/connection`)
    }
    connection.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
                        .then(mongodb => mongodb)
    connection.conn = await connection.promise
    return connection.conn
}

export default connect
