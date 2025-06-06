import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);

  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  useEffect(() => {
    setPageTitle(`${id}번 일기 수정하기`);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제하시겠습니까?")) {
      onDelete(id);
      navigate("/");
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { id, date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          title="일기 수정하기"
          leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
          rightChild={
            <Button text="삭제하기" type="negative" onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
