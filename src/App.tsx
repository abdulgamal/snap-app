import { Route, Routes } from "react-router-dom";
import { AuthLayout, SignIn, SignUp } from "./pages/auth";
import Home from "./pages/main/Home";
import MainLayout from "./pages/main/MainLayout";
import Saved from "./pages/main/Saved";

function App() {
  return (
    <main className="bg-[#101012] min-h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
