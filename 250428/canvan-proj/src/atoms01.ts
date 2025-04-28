import { atom, selector } from "recoil";

// 객체형태로 상태관리
export const minutesState = atom({
  key: "minutes",
  default: 60,
});

// 뭔가 값을 바꾸고 싶을때 셀렉터 함수 이용 get으로는 반환값 줄 수 있고 set으로 값 변경 가능
export const hourSelector = selector({
  key: "hours",
  // 미닛츠 스테이트값 찾아올때 겟함수 사용
  // set-겟으로 찾아온 값을 변환시키는 역할 -미닛스테이트 디폴트 값을 정해서 주지 말고 셋으로 변경해서 줘야함

  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    // 찾아온 값 첫번째인자값, 두번째 바꾸고싶은 인자값
    // set(minutesState, 10);
    // 여기서 겟으로 가져온 값을 셋 함수 이용해서 값 변경해서 보내줌
    const minutes = Number(newValue) * 60;
    set(minutesState, minutes);
  },
});
