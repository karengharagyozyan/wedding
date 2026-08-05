import { motion } from "framer-motion";
import styles from "./Envelope.module.scss";

interface Props {
    opened: boolean;
    onOpen(): void;
}

export default function Envelope({ opened, onOpen }: Props) {
    const handleOpen = () => {
        if (!opened) {
            onOpen();
        }
    };


    const paperY = window.innerWidth <= 480
                                    ? -170  
                                    : window.innerWidth <= 768
                                    ? -196      
                                    : -230;

    return (
        <div className={styles.scene}>
            <div className={styles.wrapper}>
                <motion.div
                    className={styles.envelope}
                    initial={{
                        y: 300,
                        opacity: 0,
                        scale: 0.85,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.8,
                        ease: "easeOut",
                    }}
                >
                    <div className={styles.shadow} />

                    <div className={styles.back} />

                    <motion.div
                        className={styles.paper}
                        animate={
                            opened
                                ? {
                                    y: paperY,
                                    scale: 1.05,
                                    rotateX: 4,
                                    opacity: 1,
                                }
                                : {
                                    y: 0,
                                    scale: 1,
                                    rotateX: 0,
                                    opacity: 0,
                                }
                        }
                        transition={{
                            duration: 1.8,
                            ease: "easeInOut",
                        }}
                    >
                        <div className={styles.paperInner}>
                            <p>ՀՐԱՎԻՐԱՏՈՄՍ</p>

                            <h2>ՏԻԳՐԱՆ</h2>

                            <span>&</span>

                            <h2>ՔՐԻՍՏԻՆԱ</h2>
                        </div>
                    </motion.div>

                    <div className={styles.front} />

                    <motion.div
                        className={styles.flap}
                        animate={
                            opened
                                ? {
                                    rotateX: -150,
                                }
                                : {
                                    rotateX: 0,
                                }
                        }
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className={styles.seal}
                        animate={
                            opened
                                ? {
                                    opacity: 0,
                                    scale: 0.5,
                                }
                                : {
                                    opacity: 1,
                                    scale: 1,
                                }
                        }
                        transition={{
                            duration: 0.5,
                        }}
                        onClick={handleOpen}
                    >
                        ❤
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}