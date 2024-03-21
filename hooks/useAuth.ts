import { authCheck } from "@/Actions/auth";
import { create } from "zustand";

interface useAuthProps {
    name: string | null;
    Users: () => void
}

export const useAuth = create<useAuthProps>()((set) => ({
    name: null,
    Users: async() => {
        const user = await authCheck()
        set({name:user})
    }
})
)