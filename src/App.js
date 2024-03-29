import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import  Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import React  from 'react';
 

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";

function App() {
  const currentUser = true;
  const Layout =()=>{
    return(
      <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }
  const ProtectRoute= ({children})=>{
      if(!currentUser){
        return <Navigate to="/login"/>
      }
      return children
  
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:(<ProtectRoute><Layout/></ProtectRoute>),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
