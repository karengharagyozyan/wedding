import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import styles from "./Login.module.scss";

import { login } from "@/services/auth.service";

interface LoginForm {
    username: string;
    password: string;
}

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();

    async function onSubmit(data: LoginForm) {
        try {
            setLoading(true);

            setLoginError("");

            const loginData = {
                ...data,
                username: data.username.toLocaleLowerCase()
            }

            await login(loginData);

            navigate("/admin");
        } catch {
            setLoginError("Invalid username or password.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className={styles.page}>
            <div className={styles.card}>
                <h1>Admin Login</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <label>
                            Username
                        </label>

                        <input
                            className={
                                errors.username || loginError
                                    ? styles.errorInput
                                    : ""
                            }
                            {...register("username", {
                                required: "Username is required",
                                onChange: () => setLoginError(""),
                            })}
                        />

                        {errors.username && (
                            <p className={styles.error}>
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            className={
                                errors.password || loginError
                                    ? styles.errorInput
                                    : ""
                            }
                            {...register("password", {
                                required: "Password is required",
                                onChange: () => setLoginError(""),
                            })}
                        />

                        {errors.password && (
                            <p className={styles.error}>
                                {errors.password.message}
                            </p>
                        )}

                        {loginError && (
                            <p className={styles.error}>
                                {loginError}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Logging..."
                            : "Login"}
                    </button>
                </form>
            </div>
        </main>
    );
}