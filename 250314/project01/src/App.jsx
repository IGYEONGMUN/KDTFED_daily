import React, { useRef, useReducer, useCallback, useMemo } from "react";
import "./App.scss";
import Header from "./Components/Header";
import TodoEditor from "./Components/TodoEditor";
import TodoList from "./Components/TodoList";
// import TestComp from "./Components/TestComp";

/*State Function*/

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }

    default:
      return state;
  }
};

/*MockUp Data*/
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "TypeScript",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Node.js",
    createdDate: new Date().getTime(),
  },
];

/*Context Obj ==API Component*/
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  // const [todo, setTodo] = useState([]);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  // const onCreate = (content) => {
  //   const newItem = {
  //     id: idRef.current,
  //     isDone: false,
  //     // content: content, <-똑같으면 축약
  //     content,
  //     createdDate: new Date().getTime(),
  //   };
  //   setTodo([newItem, ...todo]);
  //   idRef.current += 1;
  // };

  // const onUpdate = (targetId) => {
  //   setTodo(
  //     todo.map((it) => {
  //       if (it.id === targetId) {
  //         return { ...it, isDone: !it.isDone };
  //       } else {
  //         return it;
  //       }
  //     })
  //   );
  // };

  // const onDelete = (targetId) => {
  //   setTodo(todo.filter((it) => it.id !== targetId));
  // };

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  // const onCreate = useCallback(() => {
  //   (content) => {
  //     dispatch({
  //       type: "CREATE",
  //       newItem: {
  //         id: idRef.current,
  //         isDone: false,
  //         content,
  //         createdDate: new Date().getTime(),
  //       },
  //     });
  //     idRef.current += 1;
  //   };
  // }, [todo]);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const memoizedDispatchs = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatchs}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
