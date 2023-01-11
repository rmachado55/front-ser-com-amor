import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import WhatsApp from "./WhatsApp";


export default function Visitors ()
{

  return (
  <>
    <NavigationBar />
    <Outlet />
    <WhatsApp/>
    <Footer />
  </>

  )
}