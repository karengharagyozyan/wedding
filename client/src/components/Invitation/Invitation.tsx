import { motion } from "framer-motion";

import Countdown from "../Countdown/Countdown";
import Welcome from "../Welcome/Welcome";

import styles from "./Invitation.module.scss";

import couple from "../../assets/images/couple.jpg";
import Calendar from "../Calendar/Calendar";
import Gallery from "../Gallery/Gallery";
import Schedule from "../Schedule/Schedule";
import Timeline from "../Timeline/Timeline";
import DressCode from "../DressCode/DressCode";
import RSVP from "../RSVP/RSVP";
import ImportantDetails from "../ImportantDetails/ImportantDetails";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

export default function Invitation() {
    return (
        <motion.main
            className={styles.page}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
        >
            <section className={styles.hero}>
                <motion.p
                    className={styles.title}
                    initial={{
                        opacity: 0,
                        y: -50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                >
                    ՀՐԱՎԻՐԱՏՈՄՍ
                </motion.p>

                <motion.h1
                    className={styles.names}
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.4,
                        duration: 1.2,
                    }}
                >
                    <span>ՏԻԳՐԱՆ</span>

                    <span className={styles.infinity}>∞</span>

                    <span>ՔՐԻՍՏԻՆԱ</span>
                </motion.h1>

                <motion.img
                    src={couple}
                    alt="Tigran and Kristina"
                    className={styles.photo}
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 1.6,
                    }}
                />

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 1.2,
                        duration: 1,
                    }}
                >
                </motion.div>
            </section>
            <Welcome />
            <Calendar />
            <Gallery />
            <Schedule />
            <Timeline />
            <Countdown />
            <DressCode />
            <RSVP />
            <ImportantDetails />
            <MusicPlayer />
        </motion.main>
    );
}