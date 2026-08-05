import styles from "./StatsCard.module.scss";

interface Props {

    title: string;

    value: number;

}

export default function StatsCard({

    title,

    value,

}: Props) {

    return (

        <div className={styles.card}>

            <h3>

                {title}

            </h3>

            <h2>

                {value}

            </h2>

        </div>

    );

}