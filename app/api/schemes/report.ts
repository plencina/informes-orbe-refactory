import mongoose from "mongoose"
import ReportInterface from "@/app/interfaces/report"

const Report_scheme = new mongoose.Schema<ReportInterface>({
    title: String,
    image: Object,
    paragraphs: Array,
    time: Number,
    genre: Number
},
{
    versionKey: false
})

export default Report_scheme