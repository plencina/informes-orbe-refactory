import { create } from "zustand"
import TypeClient from "@/app/interfaces/client"

export const Client = create<TypeClient>((set) => ({
    uuid: '',
    querys: 1,
    news: [],
    set_uuid: (uuid) => set({ uuid: uuid }),
    set_querys: (number) => set({ querys: number}),
    set_news: (news) => set((state)=>({ news: [...state.news, ...news] }))
}))