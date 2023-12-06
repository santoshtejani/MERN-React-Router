import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Guest() {
  return (
      <Routes>
        <Route path="/" element={<h1> I am Dashboard- Guest </h1>} />
        <Route path="*" element={<Navigate to={"/"} replace="true" />} />
      </Routes>
  );
}
