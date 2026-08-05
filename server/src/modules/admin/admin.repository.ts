import { prisma } from "../../prisma/client";


export class AdminRepository {


    async getStatistics(){


        const total =
            await prisma.guest.count();



        const accepted =
            await prisma.guest.count({

                where:{
                    status:"ACCEPTED"
                }

            });



        const declined =
            await prisma.guest.count({

                where:{
                    status:"DECLINED"
                }

            });



        const pending =
            await prisma.guest.count({

                where:{
                    status:"PENDING"
                }

            });



        const views =
            await prisma.invitationView.count();



        return {

            total,

            accepted,

            declined,

            pending,

            views

        };


    }





    async getGuests(){

        return prisma.guest.findMany({

            orderBy:{
                createdAt:"desc"
            }

        });

    }


}