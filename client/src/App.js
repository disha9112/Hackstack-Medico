import './App.css';

import Cards from "./Components/Cards/Cards";
import Button from "./Components/Button/Button";
import LabelInput from "./Components/LabelInput/LabelInput";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Cards>Hello</Cards>
      <Button>Submit</Button>
      <LabelInput>Hi</LabelInput>
      <Footer>Hi</Footer>

    </div>
  );
}

export default App;
