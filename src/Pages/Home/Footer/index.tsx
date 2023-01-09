import { Box, Container } from "@mui/system";
import { themeHome } from "Themes/Home";
import FooterLogo from 'Assets/img/FooterLogo.png'
import { Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import TitleColor from "Components/TitleColor";

export default function Footer () {

return(
  <Box sx={{display:"flex"}}>
    <Box sx={{backgroundColor: themeHome.palette.primary.light, display : 'flex', width: {sm : '100%', md : '75%'}}}>
      <img src={FooterLogo} width="60%" />
      <Container>
        <Typography component="p">
          Atendimento com agendamento de <em>Segunda</em> a <em>Sexta-Feira</em>.        
          <br></br>Informações pelo telefone e/ou Whats-App:
        </Typography>
        <Typography component="p">
          <WhatsApp fontSize="inherit"/>98279-5343
        </Typography>
        
        <Typography component="p">
        Onde estamos
        </Typography>
        
        <Typography component="p">
        Rua 9 de julho, 763 - Jd Planalto - Vinhedo/SP
        </Typography>
      </Container>      
    </Box>
    <Box sx={{backgroundColor : themeHome.palette.primary.main, display : 'flex', width: {sm : '100%', md : '25%'}}}>    
      <Container>
        <Typography  component="p">
          Faça Sua Doação
        </Typography>
        <Typography>
          Banco Itaú<br></br>
          Agência: 0136<br></br>
          CC:24691-5<br></br>
        </Typography>
      </Container>
    </Box>
  </Box>
  
  )
}