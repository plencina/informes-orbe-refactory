"use client"
import styles from "@/app/(admin)/styles/login.module.css"
import { useRouter } from "next/navigation"

export default function Login () {
    const router = useRouter()

    const check_credentials = async (form: FormData) => {
        const user = form.get("user")
        const password = form.get("password")
        const response = await fetch("api/login", {
            method: "post",
            body: JSON.stringify({ user, password })
        })
        const result = await response.json()
        if (result.success) {
            localStorage.setItem("jwt", result.token)
            router.push("/dashboard")
        }
        if (result.error) {
            alert("Credenciales incorrectas")
        }
    }
    return <section className={styles.main}>
        <form action={check_credentials}>
            <p>ADMINISTRADOR</p>
            <fieldset>
                <legend>Usuario</legend>
                <input 
                type="text"
                name="user"
                />
            </fieldset>
            <fieldset>
                <legend>Contraseña</legend>
                <input 
                type="password"
                name="password"
                />
            </fieldset>
            <input
            type="submit"
            value="Conectarse"
            />
        </form>
    </section>
}