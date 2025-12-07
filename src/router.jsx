import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AttackList from "./pages/AttackList";
import AttackDetails from "./pages/AttackDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import SignUp from "./pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/attacks"
          element={
            <ProtectedRoute>
              <AttackList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/attacks/:id"
          element={
            <ProtectedRoute>
              <AttackDetails />
            </ProtectedRoute>
          }
        />

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
