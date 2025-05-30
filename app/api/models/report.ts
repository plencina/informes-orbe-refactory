import mongoose from "mongoose"
import ReportScheme from "@/app/api/schemes/report"
import ReportInterface from "@/app/interfaces/report"

export default mongoose.models.Reports || mongoose.model<ReportInterface>("Reports", ReportScheme)

