import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstitutoImg from 'Assets/img/Instituto.jpg'
import TitleColor from "Components/TitleColor";



export default function Instituto () {


  return(
      <Container id="instituto" sx={{display : { xs : 'grid', md : 'flex'}}}>
      <Box sx={{ width : { xs : '100%', md : '50%'}, py : {xs : 2, md: 8}}}>
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
      <Box sx={{ width: { xs : '100%', md : '50%'}, textAlign : 'justify', px : 5}}>
        <Typography>
          <img src={InstitutoImg} width="100%"/>   
        </Typography>
      </Box>
        
      


    </Container>    
    )    
}