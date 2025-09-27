import React from "react";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChatPage from "./pages/ChatPage";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const { authUser, isLoading, login, isLoggedIn } = useAuthStore();
  console.log("Auth user:", authUser);
  console.log("isLoading:", isLoading);
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bcd433_1px,transparent_1px),linear-gradient(to_bottom,#00bcd433_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="absolute top-0 -left-4 size-96 bg-[#00bcd4] opacity-40 blur-[100px]"></div>

      <div className="absolute bottom-0 -right-4 size-96 bg-[#2196f3] opacity-40 blur-[100px]"></div>

      <div className="relative z-10 flex items-center justify-center h-full"></div>

      <button onClick={login} className="z-10">
        login
      </button>
      <Routes>
        <Route path="/" element={<ChatPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
