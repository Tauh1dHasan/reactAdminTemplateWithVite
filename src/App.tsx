import Home from "./pages/Home";
import BlankPage from "./pages/BlankPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BlankPage" element={<BlankPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
