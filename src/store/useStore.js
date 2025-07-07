import { create } from 'zustand'

const useStore = create((set) => ({
  user: {
    name: "",
    age: 0,
    address: {
      street: "",
      city: "",
    },
  },
  updateUser: (newUser) =>
    set((state) => ({ user: { ...state.user, ...newUser } })),
  updateAddress: (newAddress) =>
    set((state) => ({
      user: {
        ...state.user,
        address: { ...state.user.address, ...newAddress },
      },
    })),
}));

export default useStore;