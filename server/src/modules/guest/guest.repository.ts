import { prisma } from "../../prisma/client";

import {
    CreateGuestInput,
    UpdateGuestInput
} from "./guest.types";


export class GuestRepository {


    async create(data: CreateGuestInput) {


        return prisma.guest.create({

            data: {

                ...data,

                slug: crypto.randomUUID(),

            }

        });

    }



    async findAll() {


        return prisma.guest.findMany({

            orderBy: {

                createdAt: "desc"

            }

        });

    }



    async findById(id:string){


        return prisma.guest.findUnique({

            where:{
                id
            }

        });


    }



    async update(
        id:string,
        data:UpdateGuestInput
    ){


        return prisma.guest.update({

            where:{
                id
            },

            data

        });


    }



    async delete(id:string){


        return prisma.guest.delete({

            where:{
                id
            }

        });


    }


}