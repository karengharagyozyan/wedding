import styles from "./ImportantDetails.module.scss";

export default function ImportantDetails() {
    return (
        <section className={styles.details}>
            <h2>ԿԱՐԵՎՈՐ ԴԵՏԱԼՆԵՐ</h2>

            <p>
                Ձեր հետ բերեք <strong>ՍԵՐ</strong>, ժպիտներ ու անսահման
                դրական էմոցիաներ, ինչպես նաև հարմարավետ կոշիկներ՝ պարելու
                համար։
            </p>

            <p>
                Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին
                ուշադիր լինեն իրենց բալիկների նկատմամբ։
            </p>
        </section>
    );
}