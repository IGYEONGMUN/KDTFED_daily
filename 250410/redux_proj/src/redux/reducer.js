// 유즈디스패치로 받은 값 -객체형태로 받으셈-액션객체
let initialState = {
  // 초기값
  count: 1,
};

// 받아온 액션객체를 연산처리하고 반환하고 스토어에서 보관함
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    // 리턴문 쓰셈-여기선 초기값 리턴
    // 초기값이 여러개 있을 수 있으니까 이런 문법을 쓰는거임
    return { ...state, count: state.count + 1 };
  }
  // 여긴 최종 파이널 리턴문
  return { ...state };
};

export default reducer;
