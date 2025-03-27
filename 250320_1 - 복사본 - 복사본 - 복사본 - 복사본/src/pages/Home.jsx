// import Button from "../components/Button";
import { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import { getMonthRangeByDate, setPageTitle } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setPageTitle("감정일기장");
  }, []);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />

      {/* <Button text="기본버튼" onClick={() => alert("기본")} />
      <Button text="긍정버튼" type="positive" onClick={() => alert("긍정")} />
      <Button text="부정버튼" type="negative" onClick={() => alert("부정")} /> */}
    </>
  );
};

export default Home;
