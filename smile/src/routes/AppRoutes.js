import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
