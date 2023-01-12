import { blue } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import TitleColor from "Components/TitleColor";
import { useEffect } from "react";



export default function Galeria () {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cdn2.woxo.tech/a.js#63bbc986d9a410d8abfe114b";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
return(
  <Container>
    <Box sx={{py: 12, textAlign:'center'}}>
      <TitleColor start={''} middle={''} end={'Galeria'} dark={false}/>
      <Box>
      <div data-mc-src="3a35e876-f5c9-40db-8c1d-b6bdea7a695e#instagram"></div>
      </Box>
      <Box sx={{ backgroundColor: "white", height:'28px', position: 'relative', top: -30 }}>
        
      </Box>

    </Box>
  </Container>
  )
}