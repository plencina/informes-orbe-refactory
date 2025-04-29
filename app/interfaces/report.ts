export default interface ReportInterface {
    _id?: string
    title: string
    image: {
        id: string,
        image: string,
        thumb: string
    }
    paragraphs: string|string[]
    time: number
    genre: number
}