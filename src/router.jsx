import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AttackList from "./pages/AttackList";
import AttackDetails from "./pages/AttackDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import SignUp from "./pages/Signup";

function Layout() {
  const location = useLocation();

  // hide navbar on login page
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Login will be FIRST PAGE now */}
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/attacks" element={<AttackList />} />
        <Route path="/attacks/:id" element={<AttackDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default Router;
