import { FlashOnRounded, PictureAsPdf } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import TitleColor from "Components/TitleColor";
import { Adm } from "./Adm";
import { themeHome } from "Themes/Home";
import { Financeiro } from "./Financeiro";


export default function Transparencia () {

return(<>
  <Box sx={{backgroundColor : themeHome.palette.background.default, py : 9}}>
  <Container >
    <Box sx={{ width : {xs : '100%', md :'50%'}}}>
    <TitleColor start="Demonstrativo" middle="" end=" Financeiro" dark={false}/>
    </Box>
    <Box sx={{display : 'flex'}}>
      {Financeiro.map(document => 
        <Paper sx={{m: 2, p :2, textAlign : 'center', width : {xs : '30%'}}}>          
           <Typography fontSize='large' component={'h2'}>
           {document.title} 
           </Typography>           
           <Typography fontSize='small' component={'p'}>
           {document.date}
           </Typography>
           <PictureAsPdf fontSize={'large'}/>

        </Paper>)}
    
    </Box>
    

  </Container>
  </Box>

  <Box sx={{backgroundColor : themeHome.palette.secondary.main, py : 9}}>
  <Container >
    <Box sx={{ width : {xs : '100%', md :'50%'}}}>
    <TitleColor start="Documentação" middle=" do" end=" Instituto" dark={true}/>
    </Box>
    <Box sx={{display : 'flex'}}>
      {Adm.map(document => 
        <Paper sx={{m: 2, p :2, textAlign : 'center', width : {xs : '30%'}}}>          
           <Typography fontSize='large' component={'h2'}>
           {document.title} 
           </Typography>           
           <Typography fontSize='small' component={'p'}>
           {document.date}
           </Typography>
           <PictureAsPdf fontSize={'large'}/>

        </Paper>)}
    
    </Box>
    

  </Container>
  </Box>
  </>
  )
}