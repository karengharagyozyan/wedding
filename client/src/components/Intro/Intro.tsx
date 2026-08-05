import { useState } from "react";

import Envelope from "./Envelope/Envelope";
import Invitation from "../Invitation/Invitation";

import styles from "./Intro.module.scss";
import Particles from "./Particles/Particles";
import { motion } from "framer-motion";


export default function Intro() {
    const [envelopeOpened, setEnvelopeOpened] = useState(false);
    const [showInvitation, setShowInvitation] = useState(false);

    const handleOpen = () => {
        setEnvelopeOpened(true);

        setTimeout(() => {
            setShowInvitation(true);
        }, 3000);
    };

    return (
        <main className={styles.scene}>
            {!showInvitation && (
                <>
                    <Particles />

                    <div className={styles.envelopeContainer}>
                        <Envelope
                            opened={envelopeOpened}
                            onOpen={handleOpen}
                        />
                        <motion.p
                            className={styles.text}
                            initial={{
                                y: 300,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1.8,
                                ease: "easeOut",
                                delay: 0.15,
                            }}
                        >
                            Հրավերը բացելու համար սեղմեք ❤ վրա։
                        </motion.p>
                    </div>
                </>
            )}

            {showInvitation && <Invitation />}
        </main>
    );

}