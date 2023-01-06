import { InsertEmoticon } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstitutoImg from 'Assets/img/Instituto.png'

import TitleColor from "Components/TitleColor";




export default function Instituto () {


  return(
      <Container sx={{display : { xs : 'grid', md : 'flex'}, mx: { xs : 0, md : 8 }, pb : {xs : '20vh', md : '30vh'}}}>
      <Box sx={{ width: { xs : '80vw', md : '38vw'}, textAlign : 'justify', px : 5}}>
      <TitleColor start={"Somos"} middle={" com"} end={" Amor"} dark={false}/>
      <Typography component="p" gutterBottom>
      Somos uma instituição sem fins lucrativos em prol de quem realmente precisa.        
      </Typography>

      <Typography component="p" gutterBottom>
      Somos uma associação regulamentada sem fins lucrativos, localizada em Vinhedo-SP, que recebe e apoia pessoas acima de 18 anos, que estejam passando pelo tratamento do câncer ou que já tenham passado, e seus familiares.
      </Typography>

      <Typography component="p" gutterBottom>
      <br>
      </br>
      Nosso objetivo é dar acolhimento e apoio de forma humanizada, especializada e gratuita, em áreas multidisciplinares.
      </Typography> 
      </Box>
      <Box sx={{ width: { xs : '84vw', md : '50vw'}, textAlign : 'justify', px : 5}}>
        <Typography>
          <img src={InstitutoImg} width="100%"/>   
        </Typography>
      </Box>
        
      


    </Container>    
    )    
}