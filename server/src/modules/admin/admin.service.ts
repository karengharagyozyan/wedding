import { AdminRepository } from "./admin.repository";


export class AdminService {


    constructor(
        private repository =
            new AdminRepository()
    ){}



    async dashboard(){

        return this.repository.getStatistics();

    }



    async guests(){

        return this.repository.getGuests();

    }


}