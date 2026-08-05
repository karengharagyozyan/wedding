import { InvitationRepository } from "./invitation.repository";

import { ApiError } from "../../shared/errors/api-error";

import { RSVPInput } from "./invitation.types";



export class InvitationService {


    constructor(
        private repository =
            new InvitationRepository()
    ) { }



    async getInvitation(slug: string) {


        const guest =
            await this.repository.findGuestBySlug(
                slug
            );



        if (!guest) {

            throw new ApiError(
                404,
                "Invitation not found"
            );

        }



        return {
            name: guest.name,
            side: guest.side,
            status: guest.status,
            guestCount: guest.guestCount,
            message: guest.message
        };

    }




    async viewInvitation(
        slug: string,
        ip?: string,
        userAgent?: string
    ) {


        const guest =
            await this.repository.findGuestBySlug(
                slug
            );



        if (!guest) {

            throw new ApiError(
                404,
                "Invitation not found"
            );

        }



        return this.repository.markViewed(

            guest.id,

            ip,

            userAgent

        );

    }




    async rsvp(
        slug: string,
        data: RSVPInput
    ) {


        const guest =
            await this.repository.findGuestBySlug(
                slug
            );



        if (!guest) {

            throw new ApiError(
                404,
                "Invitation not found"
            );

        }



        return this.repository.updateRSVP(
            slug,
            data
        );

    }


}