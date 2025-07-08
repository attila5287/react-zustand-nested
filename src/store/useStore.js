import { create } from "zustand";
import { randomUserAPI } from "../data";
const users = randomUserAPI.results;
const useStore = create((set) => ({
 users: users,
  updateUser: (index, newUser) =>
    set((state) => ({
      users: state.users.map((user, i) =>
        i === index ? { ...user, ...newUser } : user
      ),
    })),
  updateAddress: (index, newAddress) =>
    set((state) => ({
      users: state.users.map((user, i) =>
        i === index ? { ...user, ...newAddress } : user
      ),
    })),
}));

export default useStore;