import Form from "./pages/Form";
import Home from "./pages/Home";
import Table from "./pages/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
