import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registraion from "./Component/User/Registraion";
import Base from "./Component/User/Base";
import Login from "./Component/User/Login";
import Home from "./Component/User/Home";
import AllUsers from "./Component/User/AllUsers";
import ProtectedRoute from "./Component/User/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registraion />} />
          <Route path="login" element={<Login />} />
          <Route path="/all-users" element={
            <ProtectedRoute>
              <AllUsers />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
