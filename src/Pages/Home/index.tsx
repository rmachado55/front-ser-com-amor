import { ThemeProvider } from "@emotion/react";
import NavigationBar from "./NavigationBar";
import { themeHome } from "Themes/Home";
import { BannerHome } from "./BannerHome";
import Instituto from "./Instituto";
import { Container } from "@mui/system";
import Atendimentos from "./Atendimentos";


export default function Home () {
  return(
    <ThemeProvider theme={themeHome}>
        <NavigationBar />
        
        <BannerHome/>

          <Instituto/>
          <Atendimentos/>


        
        
        


      
    </ThemeProvider>
    )
}