import styles from "./DressCode.module.scss";

export default function DressCode() {
    return (
        <section className={styles.dressCode}>
            <p className={styles.text}>
                Սիրելի հյուրեր, խնդրում ենք

                <span className={styles.red}>
                    {" "}ԽՈՒՍԱՓԵԼ{" "}
                </span>

                նշված երանգների զգեստներից՝ պահպանելով

                հարսնացուի օրվա առանձնահատուկ գույնը։
            </p>

            <div className={styles.colors}>
                <div
                    className={`${styles.color} ${styles.white}`}
                />

                <div
                    className={`${styles.color} ${styles.beige}`}
                />

                <div
                    className={`${styles.color} ${styles.cream}`}
                />
            </div>

            <p className={styles.confirm}>
                Խնդրում ենք հաստատել ձեր ներկայությունը մինչև

                <strong>
                    {" "}սեպտեմբերի 1-ը
                </strong>

                ։
            </p>
        </section>
    );
}