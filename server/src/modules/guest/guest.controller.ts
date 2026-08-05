import { Request, Response } from "express";

import { GuestService } from "./guest.service";


const service = new GuestService();



export async function createGuest(
    req:Request,
    res:Response
){

    const guest =
        await service.create(
            req.body
        );


    res.status(201).json({

        success:true,

        data:guest

    });

}




export async function getGuests(
    req:Request,
    res:Response
){


    const guests =
        await service.findAll();



    res.json({

        success:true,

        data:guests

    });


}





export async function getGuest(
    req:Request,
    res:Response
){


    const guest =
        await service.findOne(
            String(req.params.id)
        );



    res.json({

        success:true,

        data:guest

    });


}




export async function updateGuest(
    req:Request,
    res:Response
){


    const guest =
        await service.update(

            String(req.params.id),

            req.body

        );


    res.json({

        success:true,

        data:guest

    });


}




export async function deleteGuest(
    req:Request,
    res:Response
){


    await service.delete(
        String(req.params.id)
    );


    res.status(204).send();

}