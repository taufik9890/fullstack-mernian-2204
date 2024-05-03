import React, { useState } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from '../pages/Registration';
import OtpVerification from '../pages/OtpVerification';
import Login from '../pages/Login';
import EmailVerifyLink from '../pages/EmailVerifyLink';
import ForgotPassword from '../pages/ForgotPassword';
import NewPassword from '../pages/NewPassword';
import Dashboard from '../pages/Dashboard';
import AddCategory from '../pages/AddCategory';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route
          path="/"
          element={<Registration/>}
        />
        <Route
          path="/otpverification/:email"
          element={<OtpVerification/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/emailverification/:token"
          element={<EmailVerifyLink/>}
        />
        <Route
          path="/forgotpassword"
          element={<ForgotPassword/>}
        />
        <Route
          path="/newpassword/:token"
          element={<NewPassword/>}
        />
        <Route
          path="/dashboard"
          element={<Dashboard/>}
        >
          <Route
          path="addcategory"
          element={<AddCategory/>}
        />

        </Route>
    </Route>
  )
);



function App() {

 
  

  return (
    <RouterProvider
    router={router}
  />
  
  )
}

export default App
