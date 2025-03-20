import GlobalStyles from "./styles/GlobalStyles.styles";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"new"}>New</Link>
        <Link to={"/diary/1"}>Diary</Link>
        <Link to={"/edit/1"}>Edit</Link>
      </div> */}
    </>
  );
}

export default App;
