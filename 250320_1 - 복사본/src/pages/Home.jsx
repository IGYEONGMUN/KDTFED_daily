// import Button from "../components/Button";
import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  const [] = useState();
  return (
    <div>
      <Header
        title="2025년 n월"
        leftChild={<Button text="<" />}
        rightChild={<Button text=">" />}
      />

      {/* <Button text="기본버튼" onClick={() => alert("기본")} />
      <Button text="긍정버튼" type="positive" onClick={() => alert("긍정")} />
      <Button text="부정버튼" type="negative" onClick={() => alert("부정")} /> */}
    </div>
  );
};

export default Home;
