import { Request, Response } from "express";

import { InvitationService } from "./invitation.service";



const service =
    new InvitationService();




export async function getInvitation(
    req:Request,
    res:Response
){


    const data =
        await service.getInvitation(
            String(req.params.slug)
        );



    res.json({

        success:true,

        data

    });


}





export async function viewInvitation(
    req:Request,
    res:Response
){


    const result =
        await service.viewInvitation(

            String(req.params.slug),

            req.ip,

            req.headers["user-agent"]

        );



    res.status(201).json({

        success:true,

        data:result

    });


}





export async function submitRSVP(
    req:Request,
    res:Response
){


    const guest =
        await service.rsvp(

            String(req.params.slug),

            req.body

        );



    res.json({

        success:true,

        data:guest

    });


}