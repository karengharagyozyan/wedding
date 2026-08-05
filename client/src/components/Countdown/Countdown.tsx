import { useEffect, useState } from "react";

import styles from "./Countdown.module.scss";

const weddingDate = new Date("2026-09-26T16:00:00");

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function calculateTime(): TimeLeft {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
    };
}

function Separator() {
    return <div className={styles.separator}>:</div>;
}

export default function Countdown() {
    const [time, setTime] = useState<TimeLeft>(calculateTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.countdown}>
            <h2>ՄՆԱՑԵԼ Է․․․</h2>

            <div className={styles.grid}>
                <Item value={time.days} label="Օր" />

                <Separator />

                <Item value={time.hours} label="Ժամ" />

                <Separator />

                <Item value={time.minutes} label="Րոպե" />

                <Separator />

                <Item value={time.seconds} label="Վարկյան" />
            </div>
        </section>
    );
}

function Item({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <div className={styles.item}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
        </div>
    );
}