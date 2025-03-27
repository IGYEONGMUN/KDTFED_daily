// import "./App.css";

import styled from "styled-components";
import { delay, motion, stagger } from "framer-motion";

// styled motion 둘다
const Wrapper = styled.div`
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

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "blue",
    transition: { duration: 3 },
  },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover={"hover"}
        whileTap={"click"}
        // whileDrag={{ backgroundColor: "blue", transition: { duration: 3 } }}
      />
    </Wrapper>
  );
}

export default App;
