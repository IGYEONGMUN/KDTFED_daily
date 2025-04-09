// 결국 타입스크립트도 JSX언어의 슈퍼셋언어 -  JSX에 타입지정한 언어
interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  return <div>ToDoListContextProvider</div>;
};

export default ToDoListContextProvider;
