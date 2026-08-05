import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./RSVP.module.scss";

import {
    rsvpSchema,
    RSVPFormData,
} from "./rsvp.schema";

import {
    createGuest,
} from "../../services/guest.service";

export default function RSVP() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<RSVPFormData>({
        resolver: zodResolver(rsvpSchema),

        defaultValues: {
            side: "TIGRAN",
            status: "ACCEPTED",
            guestCount: 1,
            name: "",
            message: "",
        },
    });

    const side = watch("side");
    const status = watch("status");

    async function onSubmit(
        data: RSVPFormData
    ) {
        try {
            await createGuest(data);
            reset({
                side: "TIGRAN",
                status: "ACCEPTED",
                guestCount: 1,
                name: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form
            className={styles.rsvp}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.field}>
                <label>
                    Ու՞մ կողմից եք
                </label>

                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={
                            side === "TIGRAN"
                                ? styles.active
                                : ""
                        }
                        onClick={() =>
                            setValue(
                                "side",
                                "TIGRAN"
                            )
                        }
                    >
                        Տիգրան
                    </button>

                    <button
                        type="button"
                        className={
                            side === "KRISTINA"
                                ? styles.active
                                : ""
                        }
                        onClick={() =>
                            setValue(
                                "side",
                                "KRISTINA"
                            )
                        }
                    >
                        Կրիստինա
                    </button>
                </div>

                <input
                    type="hidden"
                    {...register("side")}
                />
            </div>

            <div className={styles.field}>
                <label>
                    Անուն Ազգանուն
                </label>

                <input
                    type="text"
                    placeholder="Մուտքագրեք անունը"
                    {...register("name")}
                />

                {errors.name && (
                    <span className={styles.error}>
                        {errors.name.message}
                    </span>
                )}
            </div>

            <div className={styles.field}>
                <label>
                    Կկարողանա՞ք ներկա գտնվել
                </label>

                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={
                            status === "ACCEPTED"
                                ? styles.active
                                : ""
                        }
                        onClick={() =>
                            setValue(
                                "status",
                                "ACCEPTED"
                            )
                        }
                    >
                        Այո
                    </button>

                    <button
                        type="button"
                        className={
                            status === "DECLINED"
                                ? styles.active
                                : ""
                        }
                        onClick={() =>
                            setValue(
                                "status",
                                "DECLINED"
                            )
                        }
                    >
                        Ոչ
                    </button>
                </div>

                <input
                    type="hidden"
                    {...register("status")}
                />
            </div>

            <div className={styles.field}>
                <label>
                    Հյուրերի քանակ
                </label>

                <input
                    type="number"
                    min={1}
                    {...register("guestCount", {
                        valueAsNumber: true,
                    })}
                />

                {errors.guestCount && (
                    <span className={styles.error}>
                        {errors.guestCount.message}
                    </span>
                )}
            </div>

            <div className={styles.field}>
                <label>
                    Մեկնաբանություն (ըստ ցանկության)
                </label>

                <textarea
                    rows={4}
                    placeholder="Ցանկության դեպքում կարող եք թողնել հաղորդագրություն..."
                    {...register("message")}
                />
            </div>

            <button
                type="submit"
                className={styles.submit}
                disabled={isSubmitting}
            >
                {isSubmitting
                    ? "Ուղարկվում է..."
                    : "Հաստատել"}
            </button>
        </form>
    );
}