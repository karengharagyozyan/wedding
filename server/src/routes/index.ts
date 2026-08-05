import { Router } from "express";

import healthRouter from "./health.route";
import testRouter from "./test.route";

import guestRoutes from "../modules/guest/guest.routes";
import invitationRoutes from "../modules/invitation/invitation.routes";
import authRoutes from "../modules/auth/auth.routes";
import adminRoutes from "../modules/admin/admin.routes";

const router = Router();

router.use("/health", healthRouter);
router.use("/test", testRouter);

router.use(
    "/invite",
    invitationRoutes
);

router.use(
    "/guests",
    guestRoutes
);

router.use(
    "/auth",
    authRoutes
);

router.use(
    "/admin",
    adminRoutes
);

export default router;