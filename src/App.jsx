import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/success"
            element={<ProtectedRoute element={<SuccessPage />} />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Routers>
    </div>
  );
};

export default App;
