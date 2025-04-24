import mongoose from "mongoose"
import ReportInterface from "@/app/interfaces/report"

const Report_scheme = new mongoose.Schema<ReportInterface>({
    titulo: String,
    imagen: String,
    parrafos: Array,
    hora_subida: Number,
    genero: String
},
{
    versionKey: false
})

export default Report_scheme