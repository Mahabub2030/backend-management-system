import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password } = payload;

  const user = await User.create({
    email,
    password,
  });

  return user;
};

const getAllUsers = async () => {
  return {};
};

const getMe = async (userId: string) => {
  const user = await User.findById(userId).select("-password");
  return {
    data: user,
  };
};

export const UserServices = {
  createUser,
  getAllUsers,
  getMe,
};
