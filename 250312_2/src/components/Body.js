const Body = ({ children }) => {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼클릭");
  };
  return (
    <div>
      {children}
      <button>dd</button>
    </div>
  );
};

export default Body;
