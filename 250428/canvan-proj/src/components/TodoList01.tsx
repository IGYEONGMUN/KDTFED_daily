import React from "react";
import styled from "styled-components";
// 밸류 - atom값 찾기, 셋리코일스테이트 값 변환, 리코일스테이트 값찾아와서 변환
import { useRecoilState } from "recoil";
import { minutesState, hourSelector } from "../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoList = () => {
  // 인자값으로 초기값 전달
  const [minutes, setMinutes] = useRecoilState(minutesState);
  // const hours = useRecoilValue(hourSelector);

  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    // + 넘버타입으로 바꾼거임
    setMinutes(+e.currentTarget.value);
  };

  // 애는 셋함수로 뭔가 할거임 - 아톰스안에있는거 위에는 미닛스테이트에서 겟함수로 값만 받아온거고 이거는 셀렉터를 가져와서 set함수를 이용해서 바꾼거임
  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };

  return (
    <Container>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </Container>
  );
};

export default TodoList;
