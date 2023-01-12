import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import WhatsApp from "./WhatsApp";
import { themeHome } from "Themes/Home";
import { Box } from "@mui/system";


export default function Visitors ()
{

  return (
  <Box sx={{fontFamily : themeHome.typography.fontFamily}}>
    <NavigationBar />
    <Outlet />
    <WhatsApp/>
    <Footer />
  </Box>

  )
}