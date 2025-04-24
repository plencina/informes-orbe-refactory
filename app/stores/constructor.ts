import { create } from "zustand";
import TypeConstructor from "@/app/interfaces/constructor"

const Constructor = create<TypeConstructor>((set,get) => ({
    _id: '',
    titulo: '',
    imagen: '',
    parrafos: '',
    hora_subida: 0,
    genero: '',
    set_id: (id) => set({ _id: id }),
    set_titulo: (titulo) => set({ titulo }),
    set_imagen: (imagen) => set({ imagen}),
    set_parrafos: (texto) => set({ parrafos: texto }),
    set_hora_subida: (hora) => set({ hora_subida: hora }),
    set_genero: (genero) => set({ genero }),
    get_full: () => ({
        _id: get()._id,
        titulo: get().titulo,
        imagen: get().imagen,
        parrafos: (get().parrafos as string).split('\n'),
        hora_subida: get().hora_subida || Date.now(),
        genero: get().genero
    }),
    set_full: (report) => set(report),
    reset: () => set({
        _id: '',
        titulo: '',
        imagen: '',
        parrafos: '',
        hora_subida: 0,
        genero: '',
    })
}))

export default Constructor
