import styles from "./Schedule.module.scss";

import churchTop from "../../assets/icons/church-top.svg";
import churchBottom from "../../assets/icons/church-bottom.svg";

import partyTop from "../../assets/icons/party-top.svg";
import partyBottom from "../../assets/icons/party-bottom.svg";

import church from "../../assets/icons/monastery.jpg"

export default function Schedule() {
    return (
        <section className={styles.schedule}>
            <h2>ՕՐՎԱ ԾՐԱԳԻՐ</h2>

            <div className={styles.item}>
                {/* <img src={churchTop} alt="" className={styles.iconTop} /> */}
                <img
                    src="https://static.tildacdn.one/tild3063-3462-4135-b763-386566386162/Vector.svg"
                    className={styles.iconTop}
                />
                <div className={styles.content}>
                    <p>
                        Պսակադրությունը կանցկացվի{" "}
                        <strong>Գեղարդի</strong>{" "}
                        վանքում (Կոտայքի մարզ, գ․ Գողթ)
                    </p>
                </div>

                {/* <img src={churchBottom} alt="" className={styles.iconBottom} /> */}
                <img
                    src="https://static.tildacdn.one/tild6161-6236-4161-b664-626436383065/Vector11.svg"
                    className={styles.iconBottom}
                />
            </div>

            <div className={styles.item}>
                {/* <img src={partyTop} alt="" className={styles.iconTop} /> */}
                <img 
                    src="https://static.tildacdn.one/tild3533-6335-4934-b533-623065653239/Vector222.svg"
                    className={styles.iconTop}
                />

                <div className={styles.content}>
                    <p>
                        Տոնական խնջույքը կանցկացվի{" "}
                        <strong>«Safari Hall»</strong>{" "}
                        ռեստորանում (ք․ Չարենցավան, Կարեն Դեմիրճյան հրապարակ 3)
                    </p>
                </div>

                {/* <img src={partyBottom} alt="" className={styles.iconBottom} /> */}
                <img 
                    src="https://static.tildacdn.one/tild3735-3937-4263-b237-366632343339/Vector.svg" 
                    className={styles.iconBottom}
                />
            </div>
        </section>
    );
}