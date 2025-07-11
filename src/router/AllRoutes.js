import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLight from "../all-home-version/HomeLight"; // ✅ correct path

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLight />} />
    </Routes>
  );
};

export default AllRoutes;
