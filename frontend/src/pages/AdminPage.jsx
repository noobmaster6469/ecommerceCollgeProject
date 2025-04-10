import React from "react";
import useAuthStore from "../store/useAuthStore";

const AdminPage = () => {
  useAuthStore();
  return <div className="min-h-screen pt-16">AdminPage</div>;
};

export default AdminPage;
