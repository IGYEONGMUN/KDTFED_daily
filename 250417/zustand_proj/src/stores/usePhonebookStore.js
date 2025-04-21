import { create } from "zustand";

// 콜백함수 안에 소괄호 붙이는이유  - 안에 객체임.. 실행문아님
const usePhoneBookStore = create((set) => ({
  phoneBook: [],

  addContact: (name, phoneNumber) =>
    set((state) => ({
      // 불변성의법칙
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
}));

export default usePhoneBookStore;
