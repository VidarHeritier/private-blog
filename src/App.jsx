import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Components/Homepage/Homepage";
import "./App.css";
import { Posted } from "./Components/Posted/Posted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/src/Components/Posted" element={<Posted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
