import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TitleColor from "Components/TitleColor";
import { themeHome } from "Themes/Home";




export default function Atendimentos () {



  return(
    <Box sx={{width:'100%', backgroundColor : themeHome.palette.primary.light, pt: '5vh'}}>
      <Container sx={{display : { xs : 'grid', md : 'flex'}, mx: { xs : 0, md : 8 }, pb : '30vh'}}>
        <Box sx={{ width: { xs : '80vw', md : '38vw'}, textAlign : 'justify', px : 5}}>
        <TitleColor start={"Atendimentos"} middle={" em"} end={" grupo"} dark={false}/>
        <Typography>
          Temos atividades terapêuticas e educacionais em grupo, onde trabalhamos o fortalecimento de vínculos através de práticas corporais, cultura e lazer para nossos assistidos(as), seus familiares e comunidade.
        </Typography>
        </Box>

      </Container>

    </Box>
    
    )
}