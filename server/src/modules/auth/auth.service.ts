import bcrypt from "bcrypt";

import { AuthRepository } from "./auth.repository";

import { ApiError } from "../../shared/errors/api-error";

import { createToken } from "../../config/jwt";



export class AuthService {


    constructor(
        private repository =
            new AuthRepository()
    ){}



    async register(
        username:string,
        password:string
    ){


        const exists =
            await this.repository.findByUsername(
                username
            );


        if(exists){

            throw new ApiError(
                400,
                "Username already exists"
            );

        }


        const passwordHash =
            await bcrypt.hash(
                password,
                12
            );


        return this.repository.createAdmin(
            username,
            passwordHash
        );

    }





    async login(
        username:string,
        password:string
    ){


        const admin =
            await this.repository.findByUsername(
                username
            );


        if(!admin){

            throw new ApiError(
                401,
                "Invalid credentials"
            );

        }


        const valid =
            await bcrypt.compare(
                password,
                admin.passwordHash
            );


        if(!valid){

            throw new ApiError(
                401,
                "Invalid credentials"
            );

        }


        const token =
            createToken({

                id:admin.id,

                username:admin.username

            });



        return {
            admin,
            token
        };

    }

}