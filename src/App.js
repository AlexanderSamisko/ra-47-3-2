import data from "./data"
import './App.css';
import Listing from "./Components/Listing";

function App() {
  const offers = Array.from(data);

  return (
    <div className="App">
      <div className="wrapper">
      <Listing items={offers} />
      </div>
    </div>
  );
}

export default App;
