import styles from "./Timeline.module.scss";

const events = [
    {
        time: "11:30",
        title: "Պսակադրության արարողություն",
    },
    {
        time: "12:30",
        title: "Փեսայի տուն",
        subtitle: "(ք․ Աբովյան, Երիտասարդական 8)",
    },
    {
        time: "16:45",
        title: "Հարսանյաց հանդեսի սկիզբ",
    },
];

export default function Timeline() {
    return (
        <section className={styles.timeline}>
            <h2>
                ՕՐՎԱ ԺԱՄԱՆԱԿԱՑՈՒՅՑ
            </h2>

            {events.map((event, index) => (
                <div
                    key={index}
                    className={styles.item}
                >
                    <div className={styles.topLine} />

                    <h3>
                        {event.time}
                    </h3>

                    <p>
                        {event.title}
                    </p>

                    {event.subtitle && (
                        <span>
                            {event.subtitle}
                        </span>
                    )}

                    {index !== events.length - 1 && (
                        <div className={styles.bottomLine} />
                    )}
                </div>
            ))}
        </section>
    );
}