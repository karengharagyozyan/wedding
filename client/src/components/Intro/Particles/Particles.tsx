import { motion } from "framer-motion";

import styles from "./Particles.module.scss";

const particles = [...Array(35)];

export default function Particles() {

    return (

        <div className={styles.container}>

            {

                particles.map((_, i) => (

                    <motion.span

                        key={i}

                        className={styles.particle}

                        style={{

                            left: `${Math.random() * 100}%`,

                            animationDelay: `${i * .2}s`

                        }}

                        animate={{

                            y: [

                                100,

                                -900

                            ],

                            opacity: [

                                0,

                                .7,

                                0

                            ]

                        }}

                        transition={{

                            duration: 8,

                            repeat: Infinity,

                            delay: i * .15

                        }}

                    />

                ))

            }

        </div>

    );

}