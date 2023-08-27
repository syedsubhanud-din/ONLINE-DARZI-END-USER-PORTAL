import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Forgot_password from "pages/forgot_password/forgot _password";

import Darzi_dashboard from "pages/darzi_dashboard/darzi_dashboard";
import Completed_orders from "pages/completed_orders/completed_orders";
import Pending_orders from "pages/pending_orders/pending_orders";
import My_product from "pages/my_product/my_product";

import User_dashboard from "pages/User_pages/user_dashboard/user_dashboard";
import Shop from "pages/User_pages/shop/shop";
import My_orders from "pages/User_pages/my_orders/my_orders";
import Error_404_page from "pages/Error_404_page/error_404_page";


function App() {

  return (
    <>
      <Router>
        <Routes>

          {/* Login Signup And Forgot Password Routes Start Here */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgot-Password" element={<Forgot_password />} />
          {/* Login Signup And Forgot Password Routes End Here */}

          {/*Darzi Routes Start Here  */}
          <Route path="/Darzi-Dashboard" element={<Darzi_dashboard />} />
          <Route path="/My-Product" element={<My_product />} />
          <Route path="/Completed-Orders" element={<Completed_orders />} />
          <Route path="/Pending-Orders" element={<Pending_orders />} />
          {/*Darzi Routes End Here  */}

          {/*User Routes Start Here  */}
          <Route path="/" element={<User_dashboard />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/My-Orders" element={<My_orders />} />
          {/*User Routes End Here  */}
          <Route path="*" element={<Error_404_page />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;