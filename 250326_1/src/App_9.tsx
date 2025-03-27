import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  /* 돔에서 불러올때 덜컹대니까 */
  position: absolute;
  top: 180px;
`;

const BoxList = styled.div`
  display: flex;
  gap: 20px;
`;

const box = {
  // 타입스크립트에서 함수안에 인자값 정의필요
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  // 소괄호쓰는이유 반환값이 아니니까
  exits: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 0.5,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const prevPlease = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };

  const nextPlease = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };

  return (
    <Wrapper>
      {/* 생애주기안에서 뭔갈 하는요소만 애니메이트프리센스안에 */}
      {/* 백이 눌릴때만 트루로 바꿔서 쓸수있음 */}

      <AnimatePresence mode="wait" custom={back}>
        {/* 맵함수쓸때 키값챙겨라 */}
        {/* 가상돔에서 몇번째 아이템이 언마운트,업데이트되었는지 판단 => 키값으로  즉 리렌더링을 계속한다*/}
        {arr.map((i) =>
          i === visible ? (
            // inital 초기 animate 업데이트 exit 언마운트
            <Box
              custom={back}
              key={visible}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <BoxList>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
      </BoxList>
    </Wrapper>
  );
}

export default App;
