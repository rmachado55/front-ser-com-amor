import { Box, Container } from "@mui/system";
import { themeHome } from "Themes/Home";
import FooterLogo from 'Assets/img/FooterLogo.png'
import { Typography } from "@mui/material";
import { PinDrop, WhatsApp } from "@mui/icons-material";
import TitleColor from "Components/TitleColor";
import ScorpDevNegativo from "Assets/img/LogoScorpDevNegativo.png"
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function Footer () {

return(<>
  <Box sx={{display: {xs : "grid", md: "flex"}}}>
    <Box sx={{py : 9, backgroundColor: themeHome.palette.background.default, display : 'flex', width: {xs : '100%', md : '66%'}}}>
      <Box sx={{ px : 1, pt:3, ml : {xs : 0, md : 7}, width: '30%', display: 'grid', verticalAlign : 'center'}}>
        <img src={FooterLogo} width="100%"/>        
      </Box>
      <Container>
        <TitleColor start={""} middle={""} end={"Contato"} dark={false}/>
        <Typography component="p" fontSize={'medium'}>
          Atendimento com agendamento de Segunda a Sexta-Feira:
          </Typography>

          <Typography component="p" fontSize='large'>
          <br></br><WhatsApp fontSize="inherit"/>(19) 98279-5343          
          <br></br><PinDrop fontSize="inherit"/>Rua 9 de julho, 763 - Jd Planalto - Vinhedo/SP
          </Typography>
          
        
      </Container>      
    </Box>
    <Box sx={{py : 9 , backgroundColor : themeHome.palette.primary.main, display : 'flex', width: {xs : '100%', md : '34%'}}}>    
      <Container>
      <TitleColor start={""} middle={""} end={"Faça sua Doação"} dark={false}/>
        <Box  sx={{display:'flex', pt:2}}>
        <Typography>
          Banco Itaú<br></br>
          Agência: 0136<br></br>
          CC:24691-5<br></br>
          PIX: 35.520.540/0001-80
        </Typography>
        <Typography sx={{color: themeHome.palette.secondary.main, fontSize: '90px', pl: 5}}>
        <VolunteerActivismIcon fontSize="inherit"/>
        </Typography>        
        </Box>
        <Box sx={{mr : 10}}>
        <Typography fontSize='small' component={'p'}>
        Associação Vinhedense de Assistência e Desenvolvimento Social
        <br></br>CNPJ 35.520.540/0001-80
        <br></br>Nome Fantasia: Instituto ser Com amor
        
        </Typography>
        </Box>
                  
      </Container>
    </Box>
  </Box>
  <Box sx={{ backgroundColor : themeHome.palette.secondary.main, justifyContent : 'space-between', color : themeHome.palette.secondary.contrastText, display : 'flex', px : {xs : 3, md: 12}, py: 1, fontSize : {xs : '10px', md: '12px'}}}>
    <Typography fontSize={'inherit'} sx={{pr:4, py:{ xs: 0, md: 1}}} >2023 - Todos os direitos reservados - Instituto Ser com Amor</Typography>
    
    <Box>      
      <img src={ScorpDevNegativo} height="30px"/>    
    </Box>
  </Box>
  </>
  )
}