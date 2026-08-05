import type { Guest } from "@/services/guest.service";

import styles from "./GuestTable.module.scss";

interface Props {

    guests: Guest[];

}

export default function GuestTable({

    guests,

}: Props) {

    return (

        <div className={styles.wrapper}>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Side</th>

                        <th>Status</th>

                        <th>Guests Count</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        guests.map((guest) => (

                            <tr key={guest.id}>

                                <td>{guest.name}</td>

                                <td>{guest.side}</td>

                                <td>

                                    <span
                                        className={
                                            styles[
                                                guest.status.toLowerCase()
                                            ]
                                        }
                                    >
                                        {guest.status}
                                    </span>

                                </td>

                                <td>

                                    {guest.guestCount}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}