import ReportInterface from "@/app/interfaces/report"
 
interface Methods {
    set_id: (id: string) => void
    set_titulo: (titulo: string) => void
    set_imagen: (imagen: string) => void
    set_parrafos: (parrafos: string) => void
    set_hora_subida: (hora: number) => void
    set_genero: (genero: string) => void
    get_full: () => ReportInterface
    set_full: (report: ReportInterface) => void
    reset: () => void
} 

type InterfaceConstructor = ReportInterface & Methods

export default InterfaceConstructor