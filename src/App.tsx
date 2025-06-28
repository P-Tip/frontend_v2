import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./components/layout/Layout";
import Scholarship from "./pages/Scholarship";
import Timetable from "./pages/Timetable";
import Todo from "./pages/Todo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
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
