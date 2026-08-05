import styles from "./Header.module.scss";

interface Props {
    username: string;
}

export default function Header({
    username,
}: Props) {
    return (
        <header className={styles.header}>

            <div>

                <h1>
                    Wedding Invitation Admin
                </h1>

                <p>
                    Dashboard
                </p>

            </div>

            <div className={styles.user}>

                <div className={styles.avatar}>
                    {username.charAt(0).toUpperCase()}
                </div>

                <span>
                    {username}
                </span>

            </div>

        </header>
    );
}