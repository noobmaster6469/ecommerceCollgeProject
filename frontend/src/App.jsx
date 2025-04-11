import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useThemeStore } from "./store/useThemeStore";
import ViewPage from "./pages/ViewPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import useAuthStore from "./store/useAuthStore";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import DeletePage from "./pages/DeletePage";
import AddPage from "./pages/AddPage";

const App = () => {
  const { theme, setTheme } = useThemeStore();
  const { authUser, checkAuth, isCheckingAuth, isAdmin } = useAuthStore();
  useEffect(() => {
    setTheme("dim");
    checkAuth();
  }, [setTheme, checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/view"
          element={authUser ? <ViewPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/product/:category"
          element={authUser ? <ProductPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/product"
          element={authUser ? <ProductPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/admin"
          element={authUser && isAdmin ? <AdminPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/edit/:id"
          element={authUser && isAdmin ? <EditPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/delete/:id"
          element={authUser && isAdmin ? <DeletePage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/add"
          element={authUser && isAdmin ? <AddPage /> : <Navigate to="/" />}
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
