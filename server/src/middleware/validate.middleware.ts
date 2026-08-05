import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

export function validate(schema: ZodType) {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        await schema.parseAsync({
            body: req.body,
            params: req.params,
            query: req.query,
        });

        next();
    };
}