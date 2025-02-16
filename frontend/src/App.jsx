import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useThemeStore } from "./store/useThemeStore";
import ViewPage from "./pages/ViewPage";

const App = () => {
  const { theme, setTheme } = useThemeStore();
  useEffect(() => {
    setTheme("dim");
  }, [setTheme]);

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/view" element={<ViewPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
