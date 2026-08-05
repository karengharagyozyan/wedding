import { Router } from "express";


import {
    dashboard,
    guests

} from "./admin.controller";


import {
    authMiddleware

} from "../../middleware/auth.middleware";


import { asyncHandler } from "../../shared/utils/async-handler";



const router = Router();



router.use(
    authMiddleware
);



router.get(
    "/dashboard",
    asyncHandler(dashboard)
);



router.get(
    "/guests",
    asyncHandler(guests)
);



export default router;