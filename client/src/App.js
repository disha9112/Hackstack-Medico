import './App.css';

import Cards from "./Components/Cards/Cards";
import Button from "./Components/Button/Button";
import LabelInput from "./Components/LabelInput/LabelInput";

function App() {
  return (
    <div className="App">
      <Cards>Hello</Cards>
      <Button>Submit</Button>
      <LabelInput>Hi</LabelInput>
    </div>
  );
}

export default App;
