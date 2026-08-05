import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { images } from "./images";

import styles from "./Gallery.module.scss";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    const previous = () => {
        setIndex(
            index === 0
                ? images.length - 1
                : index - 1
        );
    };

    const next = () => {
        setIndex(
            index === images.length - 1
                ? 0
                : index + 1
        );
    };

    return (
        <section className={styles.gallery}>
            <h2>
                Մեր հիշողությունները
            </h2>

            <div className={styles.slider}>
                <button
                    onClick={previous}
                    className={styles.arrow}
                >
                    <ChevronLeft size={28} />
                </button>

                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        className={styles.image}
                        initial={{
                            opacity: 0,
                            x: 80,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: -80,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    />
                </AnimatePresence>

                <button
                    onClick={next}
                    className={styles.arrow}
                >
                    <ChevronRight size={28} />
                </button>
            </div>
        </section>
    );
}