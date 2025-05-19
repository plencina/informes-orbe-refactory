import { create } from "zustand";
import TypeAdmin from "@/app/interfaces/admin";

const StoreAdmin = create<TypeAdmin>((set)=>({
    reports: [],
    viewer: 'main',
    request: 1,
    set_viewer: (viewer) => set({ viewer: viewer }),
    add_reports: (array) => set((state)=>({ reports: [...state.reports, ...array ]})),
    reset: () => set({ reports: [], request: 1 }),
    inc_request: () => set((state) => ({ request: state.request + 1 })),
}))

export default StoreAdmin