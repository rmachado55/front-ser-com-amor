import { ThemeProvider } from "@emotion/react";
import NavigationBar from "./NavigationBar";
import { themeHome } from "Themes/Home";
import { BannerHome } from "./BannerHome";
import Instituto from "./Instituto";
import Atendimentos from "./Atendimentos";
import Galeria from "./Galeria";
import Parceiros from "./Parceiros";
import Footer from "./Footer";


export default function Home () {
  return(
    <>    
      <BannerHome/>
      <Instituto/>
      <Atendimentos/>
      <Galeria/>
      <Parceiros/>    
    </>
           

    )
}