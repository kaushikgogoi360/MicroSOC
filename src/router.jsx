import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AttackList from "./pages/AttackList";
import AttackDetails from "./pages/AttackDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/attacks" element={<AttackList />} />
        <Route path="/attacks/:id" element={<AttackDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
