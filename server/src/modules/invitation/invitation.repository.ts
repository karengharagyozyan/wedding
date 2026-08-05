import { prisma } from "../../prisma/client";

import { RSVPInput } from "./invitation.types";



export class InvitationRepository {


    async findGuestBySlug(slug:string){


        return prisma.guest.findUnique({

            where:{
                slug
            }

        });

    }



    async markViewed(
        guestId:string,
        ip?:string,
        userAgent?:string
    ){


        await prisma.guest.update({

            where:{
                id:guestId
            },


            data:{

                viewed:true,

                viewedAt:new Date()

            }

        });



        return prisma.invitationView.create({

            data:{

                guestId,

                ip,

                userAgent

            }

        });


    }




    async updateRSVP(
        slug:string,
        data:RSVPInput
    ){


        return prisma.guest.update({

            where:{
                slug
            },


            data

        });


    }


}