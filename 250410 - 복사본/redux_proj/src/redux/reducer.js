// 유즈디스패치로 받은 값 -객체형태로 받으셈-액션객체
let initialState = {
  // 초기값
  count: 1,
  id: "",
  password: "",
};

// 받아온 액션객체를 연산처리하고 반환하고 스토어에서 보관함
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
};

export default reducer;
