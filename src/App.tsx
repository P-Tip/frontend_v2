import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Scholarship from "./pages/Scholarship";
import Timetable from "./pages/Timetable";
import Todo from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
