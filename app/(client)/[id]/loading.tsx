import styles from "@/app/(client)/styles/dinamic_report.module.css";
import Header from "@/app/(client)/header/header";

export default function Loading () {
    return <div className={styles.main}>
        <div className={styles.report}>
            <Header />
            <div className={styles.loading}>
                <div className={styles.loading_top}></div>
                <div className={styles.loading_bottom}></div>
            </div>
        </div>
    </div>  
} 