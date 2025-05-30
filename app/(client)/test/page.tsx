import styles from "@/app/(client)/styles/tests.module.css"
export default function Page () {
    return <div className={styles.main}>
        <div className={styles.container}>
            <h1>Título</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum autem fuga nam iure, ullam eligendi? Delectus odio praesentium ullam?</p>
        </div>
    </div>
}