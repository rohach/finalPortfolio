import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Loader />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
