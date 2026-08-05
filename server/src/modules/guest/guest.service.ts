import { GuestRepository } from "./guest.repository";

import {
    CreateGuestInput,
    UpdateGuestInput
} from "./guest.types";

import { ApiError } from "../../shared/errors/api-error";



export class GuestService {


    constructor(
        private repository = new GuestRepository()
    ){}



    async create(
        data:CreateGuestInput
    ){

        return this.repository.create(data);

    }



    async findAll(){

        return this.repository.findAll();

    }



    async findOne(id:string){


        const guest =
            await this.repository.findById(id);



        if(!guest){

            throw new ApiError(
                404,
                "Guest not found"
            );

        }


        return guest;

    }



    async update(
        id:string,
        data:UpdateGuestInput
    ){


        await this.findOne(id);


        return this.repository.update(
            id,
            data
        );


    }



    async delete(id:string){


        await this.findOne(id);


        return this.repository.delete(id);


    }


}