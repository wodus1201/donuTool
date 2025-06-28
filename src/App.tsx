// import { useState } from "react";
// import { useNavigate, useLocation, Routes, Route, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "@/styles/App.css";

function App() {
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 flex items-center justify-center">
              <div className="p-10 rounded-2xl shadow-xl bg-white text-center space-y-4">
                <h1 className="text-2xl font-semibold text-blue-600">Tailwind 적용 성공! 🎉</h1>
                <p className="text-gray-600">지금 이 화면이 잘 보이면 Tailwind가 잘 작동하고 있는 거예요.</p>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition">확인</button>
              </div>
            </div>
          }
        />
        {/* <Route path="/setting" element={} /> */}
      </Routes>
    </>
  );
}

export default App;
