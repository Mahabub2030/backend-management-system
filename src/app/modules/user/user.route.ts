import { Router } from "express";

import { UserControllers } from "./user.controller";

const router = Router();

router.post("/register", UserControllers.createUser);
router.get("/all-users", UserControllers.getAllUsers);
router.get("/me", UserControllers.getMe);
router.get("/:id", UserControllers.getSingleUser);

// /api/v1/user/:id
export const UserRoutes = router;
