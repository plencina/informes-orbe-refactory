import ReportInterface from "@/app/interfaces/report"

interface Values {
    reports: ReportInterface[] | []
    viewer: string
    request: number
}
interface Methods {
    set_viewer: (viewer: string) => void
    add_reports: (array: ReportInterface[]) => void
    reset: () => void
    inc_request: () => void
}

type TypeAdmin = Values & Methods

export default TypeAdmin