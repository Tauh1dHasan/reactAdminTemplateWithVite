import Home from "./pages/Home";
import BlankPage from "./pages/BlankPage";
import TaskIndex from "./pages/TaskIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BlankPage" element={<BlankPage />} />
        <Route path="/TaskIndex" element={<TaskIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
