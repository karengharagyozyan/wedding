import { Request, Response } from "express";

import { AdminService } from "./admin.service";


const service =
    new AdminService();



export async function dashboard(
    req:Request,
    res:Response
){


    const data =
        await service.dashboard();



    res.json({

        success:true,

        data

    });

}





export async function guests(
    req:Request,
    res:Response
){


    const data =
        await service.guests();



    res.json({

        success:true,

        data

    });


}