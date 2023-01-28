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
    <TitleColor start="Documentos" middle=" da" end=" Instituição" dark={false}/>
    </Box>    
    <a href="/src/Assets/files/ESTATUTO.pdf">
    <Box sx={{display : 'flex'}}>      
        <Paper sx={{m: 2, p :2, textAlign : 'center', width : {xs : '30%'}}}>          
           <Typography fontSize='large' component={'h2'}>
           Estatuto do Instituto Ser com Amor 
           </Typography>           
           <Typography fontSize='small' component={'p'}>
           Última atualização - 2022
           </Typography>
           <PictureAsPdf fontSize={'large'}/>

        </Paper>    
    </Box>
    </a>
    

  </Container>
  </Box>

  <Box sx={{backgroundColor : themeHome.palette.secondary.main, py : 9}}>
  <Container >
    <Box sx={{ width : {xs : '100%', md :'50%'}}}>
    <TitleColor start="Documentos" middle="" end=" Contábeis" dark={true}/>
    </Box>
    <Box sx={{display : 'flex'}}>
      <Paper sx={{m: 2, p :2, textAlign : 'center', width : {xs : '30%'}}}>          
           <Typography fontSize='large' component={'h2'}>
            Demonstrativo Contábil
           </Typography>           
           <Typography fontSize='small' component={'p'}>
            Ano 2022
           </Typography>
           <PictureAsPdf fontSize={'large'}/>
        </Paper>    
    </Box>
  </Container>
</Box>
<Box sx={{backgroundColor : themeHome.palette.background.default, py : 9}}>
  <Container >
    <Box sx={{ width : {xs : '100%', md :'50%'}}}>
    <TitleColor start="Parcerias " middle="" end=" Públicas" dark={false}/>
    </Box>
    <a href="/src/Assets/files/colaboracao2022.pdf">
      <Box sx={{display : 'flex'}}>      
        <Paper sx={{m: 2, p :2, textAlign : 'center', width : {xs : '30%'}}}>          
           <Typography fontSize='large' component={'h2'}>
           Termo de Colaboração
           </Typography>           
           <Typography fontSize='small' component={'p'}>
           Ano 2022
           </Typography>
           <PictureAsPdf fontSize={'large'}/>

        </Paper>    
      </Box>    
    </a>
  </Container>
  </Box>


  </>
  )
}