import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppPaths from "./configs/AppPaths";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ProtectedRoute from "./navigation/ProtectedRoute";
import ToastContainerComponent from "./components/atom/toastContainerComponent/ToastContainerComponent";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path={AppPaths.HomePage}
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route path={AppPaths.LoginPage} element={<LoginPage />}></Route>
        </Routes>
      </Router>
      <ToastContainerComponent />
    </QueryClientProvider>
  );
}

export default App;
