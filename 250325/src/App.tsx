// import "./App.css";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

// styled motion 둘다
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

/*
  -800=>2

  -400=>1.5

  0=>1

  +400=>0.5

  +800 => 0
*/

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const background = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg,rgb(0,210,238),rgb(0,83,238))",
      "linear-gradient(135deg,rgb(238,210,153),rgb(221,0,238))",
      "linear-gradient(135deg,rgb(0,238,155),rgb(238,178,0))",
    ]
  );
  useEffect(() => {
    scale.on("change", () => console.log(scale.get()));
  }, [x]);
  // 제네릭타입
  return (
    <Wrapper style={{ background }}>
      <Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
