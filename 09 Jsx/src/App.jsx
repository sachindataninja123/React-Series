import "./App.css";

function App() {
  var name = "sachin";
  function srName() {
    return "Hello sir Come in my Car";
  }
  var age = 13;
  const arr = ["ironman" , "wanda" , "batman" , "spiderman" , "hulk" , "thor"];

  return (
    <>
      <h1 style= {{
        backgroundColor : "red",
        fontSize : "30px",
        display : "inline-block"
      }}>Hello {name}</h1>
      
      {age >= 18 ? <h1 style={{
        color : "green",
      }}>{srName()}</h1> :<h1 style={{
        color: "red",
      }}>You Not Drive!</h1>}


      {arr.map((item) => {
        return <h2>{item}</h2>
      })}
    </>
  );
}

export default App;
