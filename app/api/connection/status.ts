import mongoose from "mongoose"

async function status () {
    return ({
        readyState: mongoose.connection.readyState,
        connections: mongoose.connections.length
    })
}

export default status