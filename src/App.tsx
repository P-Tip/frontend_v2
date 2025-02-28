import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Scholarship from "./pages/Scholarship";
import Timetable from "./pages/Timetable";
import Todo from "./pages/Todo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
