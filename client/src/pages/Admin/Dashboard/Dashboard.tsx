import { useEffect, useState } from "react";

import Header from "@/components/Admin/Header/Header";

import StatsCard from "@/components/Admin/StatsCard/StatsCard";

import GuestTable from "@/components/Admin/GuestTable/GuestTable";

import { me } from "@/services/auth.service";

import {

    Guest,

    getGuests,

} from "@/services/guest.service";

import styles from "./Dashboard.module.scss";

export default function Dashboard() {

    const [username, setUsername] = useState("");

    const [guests, setGuests] = useState<Guest[]>([]);

    useEffect(() => {

        async function load() {

            try {

                const admin = await me();
                if (admin) {
                    setUsername(admin.username);
                }

                const guestList = await getGuests();
                setGuests(guestList);

            } catch (err) {

                console.error(err);

            }

        }

        load();

    }, []);

    const accepted =
        guests.filter(
            guest => guest.status === "ACCEPTED"
        ).length;

    const declined =
        guests.filter(
            guest => guest.status === "DECLINED"
        ).length;

    const pending =
        guests.filter(
            guest => guest.status === "PENDING"
        ).length;

    return (

        <main className={styles.page}>

            <Header
                username={username}
            />

            <section className={styles.stats}>

                <StatsCard

                    title="Total Guests"

                    value={guests.length}

                />

                <StatsCard

                    title="Accepted"

                    value={accepted}

                />

                <StatsCard

                    title="Declined"

                    value={declined}

                />

                <StatsCard

                    title="Pending"

                    value={pending}

                />

            </section>

            <GuestTable

                guests={guests}

            />

        </main>

    );

}