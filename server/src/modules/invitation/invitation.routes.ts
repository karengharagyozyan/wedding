import { Router } from "express";


import {
    getInvitation,
    viewInvitation,
    submitRSVP

} from "./invitation.controller";


import { asyncHandler } from "../../shared/utils/async-handler";


import { validate } from "../../middleware/validate.middleware";


import {
    slugSchema,
    rsvpSchema

} from "./invitation.schema";



const router = Router();



router.get(
    "/:slug",
    validate(slugSchema),
    asyncHandler(getInvitation)
);



router.post(
    "/:slug/view",
    validate(slugSchema),
    asyncHandler(viewInvitation)
);



router.post(
    "/:slug/rsvp",
    validate(rsvpSchema),
    asyncHandler(submitRSVP)
);



export default router;