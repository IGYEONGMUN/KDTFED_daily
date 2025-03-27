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
  width: 400px;
  height: 400px;
  background: var(--light-color);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: var(--circle-color);
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  // 이 토글구문많이나옴
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };

  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        <Circle />
      </Box>
    </Wrapper>
  );
}

export default App;
