import { useNavigate, useLocation, Routes, Route, Navigate } from "react-router-dom";
import "@/styles/App.css";
import MainPage from "@/popUpPage/pages/MainPage";
import SettingPage from "@/popUpPage/pages/SettingPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="absolute -z-50 w-[350px] h-[400px] bg-gray-200"></div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </>
  );
}

export default App;
