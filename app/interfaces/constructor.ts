import ReportInterface from "@/app/interfaces/report"
export interface Image { 
    id: string,
    image: string,
    thumb: string
}
interface Methods {
    set_id: (id: string) => void
    set_title: (title: string) => void
    set_image: (image: Image) => void
    set_paragraphs: (paragraphs: string) => void
    set_time: (time: number) => void
    set_genre: (genre: number) => void
    get_full: () => ReportInterface
    set_full: (report: ReportInterface) => void
    reset: () => void
} 

type InterfaceConstructor = ReportInterface & Methods

export default InterfaceConstructor