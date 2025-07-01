import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./components/layout/Layout";
import Scholarship from "./pages/Scholarship";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import Program from "./pages/Program";

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
            <Route path="/program" element={<Program />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
