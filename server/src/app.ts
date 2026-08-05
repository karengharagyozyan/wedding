import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import { errorMiddleware } from "./middleware/error.middleware";

import routes from "./routes";

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL,
].filter(Boolean);


app.use(
    cors({
        origin(origin, callback) {

            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(
                new Error("Not allowed by CORS")
            );
        },
        credentials: true,
    })
);


app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.use("/api", routes);


app.use(errorMiddleware);


export default app;