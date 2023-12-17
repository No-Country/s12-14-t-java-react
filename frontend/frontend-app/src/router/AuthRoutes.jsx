import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
};
