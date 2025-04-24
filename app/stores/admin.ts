import { create } from "zustand";
import TypeAdmin from "@/app/interfaces/admin";

const Admin = create<TypeAdmin>((set)=>({
    reports: [],
    viewer: 'main',
    requests: 0,
    set_viewer: (viewer) => set({ viewer: viewer }),
    add_reports: (array) => set((state)=>({ reports: [...state.reports, ...array ]})),
    reset: () => set({ reports: [], requests: 0 }),
    sum_request: () => set((state) => ({ requests: state.requests + 1 })),
}))

export default Admin