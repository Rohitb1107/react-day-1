import "./App.css";

function App() {
  const mobileOS = ["Android", "Blackberry", "IPhone", "Windows Phone"];
  const company = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <>
      <h1>Mobile Operating System</h1>
      <ul>
        {mobileOS.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>

      <h1>Mobile Manufacturers</h1>
      <ul>
        {company.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
