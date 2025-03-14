import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const handleClick = () => {
    return (
      <>
        <div>Child component</div>
        <button onClick={handleClick}>클릭하셈</button>
      </>
    );
  };
  return (
    <div className="App">
      <Header />
      <Body>
        <handleClick></handleClick>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
