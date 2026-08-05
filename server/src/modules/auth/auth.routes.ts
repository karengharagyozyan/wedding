import { Router } from "express";

import {
    register,
    login,
    logout,
    me

} from "./auth.controller";


import { validate } from "../../middleware/validate.middleware";

import { authMiddleware } from "../../middleware/auth.middleware";

import {
    registerSchema,
    loginSchema

} from "./auth.schema";


import { asyncHandler } from "../../shared/utils/async-handler";



const router = Router();



router.post(
    "/register",
    validate(registerSchema),
    asyncHandler(register)
);



router.post(
    "/login",
    validate(loginSchema),
    asyncHandler(login)
);



router.post(
    "/logout",
    asyncHandler(logout)
);



router.get(
    "/me",
    authMiddleware,
    asyncHandler(me)
);



export default router;