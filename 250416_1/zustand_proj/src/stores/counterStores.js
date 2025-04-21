import { create } from "zustand";

// 객체를 반환해야 하니까 소괄호 감싸야함 실행문이 아님
const counterStore = create((set) => ({
  count: 1,
  // 스테이트는 위쪽의 카운트(즉 스테이트)
  increase: () => set((state) => ({ count: state.count + 1 })),
  increaseBy: (value) => set((state) => ({ count: state.count + value })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default counterStore;
