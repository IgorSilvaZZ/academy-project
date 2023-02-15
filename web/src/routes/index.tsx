import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='loginAcademy' element={<Login />} />
        <Route path='/registerAcademy' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
