import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { UserControllers } from "./user.controller";
import { Role } from "./user.interface";

const router = Router();

router.post("/register", UserControllers.createUser);
router.get(
  "/all-users",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  UserControllers.getAllUsers
);
router.patch(
  "/:id",
  checkAuth(...Object.values(Role)),
  UserControllers.updateUser
);

router.get("/me", UserControllers.getMe);
router.get("/:id", UserControllers.getSingleUser);

// /api/v1/user/:id
export const UserRoutes = router;
