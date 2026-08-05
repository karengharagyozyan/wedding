import styles from "./Calendar.module.scss";

export default function Calendar() {
    return (
        <section className={styles.calendar}>
            <h2>ՍԵՊՏԵՄԲԵՐ 2026</h2>

            <div className={styles.days}>
                <div className={styles.dayLeft2}>24</div>

                <div className={styles.dayLeft1}>25</div>

                <div className={styles.heart}>
                    <svg
                        viewBox="0 0 100 90"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M50 82
                               L44 76
                               C18 52 4 38 4 21
                               C4 10 13 2 24 2
                               C33 2 42 7 50 17
                               C58 7 67 2 76 2
                               C87 2 96 10 96 21
                               C96 38 82 52 56 76
                               Z"
                        />
                    </svg>

                    <span>26</span>
                </div>

                <div className={styles.dayLeft1}>27</div>

                <div className={styles.dayLeft2}>28</div>
            </div>
        </section>
    );
}