import { prisma } from "../../prisma/client";


export class AuthRepository {


    async findByUsername(
        username:string
    ){

        return prisma.admin.findUnique({

            where:{
                username
            }

        });

    }



    async createAdmin(
        username:string,
        passwordHash:string
    ){

        return prisma.admin.create({

            data:{

                username,

                passwordHash

            }

        });

    }

}