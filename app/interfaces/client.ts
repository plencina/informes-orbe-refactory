import ReportInterface from "@/app/interfaces/report"

interface Values {
    uuid: string
    request: number
    reports: []|ReportInterface[]
}
interface Methods {
    set_uuid: (uuid: string) => void
    inc_request: () => void
    set_reports: (reports: []|ReportInterface[]) => void
}

type TypeClient = Values & Methods

export default TypeClient