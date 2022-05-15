import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./common/ProtectedRoute";
import Profile from "./Profile";
import SearchCar from "./pages/SearchCar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchCar />} />
          <Route path="carlist" element={<CarList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/cardetail/:id" element={<CarDetail />} />
          {/* <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} />
          </Route> */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
