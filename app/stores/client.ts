import { create } from "zustand"
import TypeClient from "@/app/interfaces/client"

const StoreClient = create<TypeClient>((set) => ({
    uuid: '',
    request: 1,
    reports: [],
    set_uuid: (uuid) => set({ uuid: uuid }),
    inc_request: () => set((state)=>({ request: state.request + 1 })),
    set_reports: (news) => set((state)=>({ reports: [...state.reports, ...news] }))
})) 

export default StoreClient