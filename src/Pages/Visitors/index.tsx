import NavigationBar from "./Home/NavigationBar";
import Footer from "./Home/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";


export default function Visitors () {

  return(<>
  <NavigationBar/>
  <Outlet/>
  <Footer/>
  </>
  
    )
}