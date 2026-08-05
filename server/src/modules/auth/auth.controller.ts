import { Request, Response } from "express";

import { AuthService } from "./auth.service";


const service = new AuthService();



export async function register(
    req: Request,
    res: Response
) {

    const admin = await service.register(
        req.body.username,
        req.body.password
    );


    res.status(201).json({

        success: true,

        data: {
            id: admin.id,
            username: admin.username
        }

    });

}




export async function login(
    req: Request,
    res: Response
) {


    const result =
        await service.login(
            req.body.username,
            req.body.password
        );


    res.cookie(
        "token",
        result.token,
        {
            httpOnly: true,

            secure: process.env.NODE_ENV === "production",

            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax",

            maxAge:
                7 * 24 * 60 * 60 * 1000
        }
    );


    res.json({

        success:true,

        data:{
            id: result.admin.id,
            username: result.admin.username
        }

    });

}





export async function logout(
    req:Request,
    res:Response
){

    res.clearCookie(
        "token",
        {
            httpOnly: true,

            secure: process.env.NODE_ENV === "production",

            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax",
        }
    );


    res.json({

        success:true,

        message:"Logged out"

    });

}




export async function me(
    req:Request,
    res:Response
){

    res.json({

        success:true,

        data:(req as any).admin

    });

}