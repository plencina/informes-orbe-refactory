import { create } from "zustand";
import TypeConstructor from "@/app/interfaces/constructor"

const store_initial_state = {
    _id: '',
    title: '',
    image: {
        id: '',
        image: '',
        thumb: ''
    }, 
    paragraphs: '',
    time: 0,
    genre: 0,
}
const Constructor = create<TypeConstructor>((set,get) => ({
    _id: '',
    title: '',
    image: {
        id: '',
        image: '',
        thumb: ''
    }, 
    paragraphs: '',
    time: 0,
    genre: 0,
    set_id: (id) => set({ _id: id }),
    set_title: (title) => set({ title }),
    set_image: (image) => set({ image }),
    set_paragraphs: (text) => set({ paragraphs: text }),
    set_time: (time) => set({ time }),
    set_genre: (genre) => set({ genre }),
    get_full: () => ({
        _id: get()._id,
        title: get().title,
        image: get().image,
        paragraphs: (get().paragraphs as string).split('\n'),
        time: get().time || Date.now(),
        genre: get().genre
    }),
    set_full: (report) => set(report),
    reset: () => set(store_initial_state)
}))

export default Constructor
