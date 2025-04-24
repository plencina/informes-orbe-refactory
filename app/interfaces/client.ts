import ReportInterface from "@/app/interfaces/report"

interface Values {
    uuid: string
    querys: number
    news: []|ReportInterface[]
}
interface Methods {
    set_uuid: (uuid: string) => void
    set_querys: (number: number) => void
    set_news: (news: []|ReportInterface[]) => void
}

type TypeClient = Values & Methods

export default TypeClient