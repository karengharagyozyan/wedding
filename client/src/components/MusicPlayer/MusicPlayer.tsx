import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import music from "../../assets/music/Elvis_Presly_-_I_Can_t_Help_Falling_In_Love_With_You_.mp3"
import styles from "./MusicPlayer.module.scss";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        if (playing) {
            audio.play().catch(() => {
                setPlaying(false);
            });
        } else {
            audio.pause();
        }
    }, [playing]);

    useEffect(() => {
        return () => {
            audioRef.current?.pause();
        };
    }, []);

    return (
        <>
            <audio
                ref={audioRef}
                src={music}
                loop
            />

            <button
                className={styles.player}
                onClick={() => setPlaying(prev => !prev)}
                aria-label={playing ? "Pause music" : "Play music"}
            >
                {playing ? <Pause size={24} /> : <Play size={24} />}
            </button>
        </>
    );
}