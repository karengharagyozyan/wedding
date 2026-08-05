import { Router } from "express";

import {
    createGuest,
    getGuests,
    getGuest,
    updateGuest,
    deleteGuest

} from "./guest.controller";


import { validate } from "../../middleware/validate.middleware";

import { authMiddleware } from "../../middleware/auth.middleware";

import {
    createGuestSchema,
    updateGuestSchema

} from "./guest.schema";


import { asyncHandler } from "../../shared/utils/async-handler";


const router = Router();


// Public — anyone visiting the site can submit their RSVP
router.post(
    "/",
    validate(createGuestSchema),
    asyncHandler(createGuest)
);


// Admin-only from here down
router.get(
    "/",
    authMiddleware,
    asyncHandler(getGuests)
);


router.get(
    "/:id",
    authMiddleware,
    asyncHandler(getGuest)
);


router.put(
    "/:id",
    authMiddleware,
    validate(updateGuestSchema),
    asyncHandler(updateGuest)
);


router.delete(
    "/:id",
    authMiddleware,
    asyncHandler(deleteGuest)
);


export default router;