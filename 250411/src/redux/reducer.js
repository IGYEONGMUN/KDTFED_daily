// 얘가 리듀서의 역할을 할 수있음
import { createSlice } from "@reduxjs/toolkit";

let initialState = { contactList: [], keyword: "" };

// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "ADD_CONTACT":
//       return {
//         ...state,
//         contactList: [
//           ...state.contactList,
//           {
//             name: payload.name,
//             phoneNumber: payload.phoneNumber,
//           },
//         ],
//       };

//     case "SEARCH_BY_USERNAME":
//       return {
//         ...state,
//         keyword: payload.keyword,
//       };

//     // 이거꼭써야함
//     default:
//       return { ...state };
//   }
// };

// export default reducer;
// 크레이트슬라이스도 함수임

const contactSlice = createSlice({
  name: "contact",
  // initialState: initialState,
  // 생략가능
  initialState,
  // 타입여러개 나올수있음
  reducers: {
    // 케이스로 정의했던거를 함수로 만들어버림 / 이전에는 부모가 전달해서 받았는데 여기선 매개변수로 줘버림 / 이니셜스테이트 위에 두번째 인자값으로 정의 해서 또 줄필요없음
    // 초기값이 이니셜 스테이트로 줬기때문에 전개연산자 쓸필요없음
    addContact(state, action) {
      state.contactList.push({
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
      });
    },
    // 스테이트 액션 또 줘야됨
    searchByUserName(state, action) {
      state.keyword = action.payload.keyword;
    },
  },
});

console.log("test", contactSlice);

// 자동생성된 리듀서의 값을 스토어가받음
export const contactReducer = contactSlice.reducer;
// 함수보내줌 이걸 컨텍트폼에서 받아서 쓸거임
export const { addContact, searchByUserName } = contactSlice.actions;
