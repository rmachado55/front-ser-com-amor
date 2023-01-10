import { Box, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TitleColor from "Components/TitleColor";
import { themeHome } from "Themes/Home";
import AtendimentosGrupo from 'Assets/img/AtendimentosGrupo.jpg'
import AtendimentosComunitarios from 'Assets/img/AtendimentosComunitarios.jpg'
import AtendimentosIndividuais from 'Assets/img/AtendimentosIndividuais.jpg'
import ListColumn from "Components/ListColumn";




export default function Atendimentos () {

  return(<>
    <Box sx={{width:'100%', backgroundColor : themeHome.palette.background.default, pt: '10vh'}}>
      <Container sx={{display : { xs : 'grid', md : 'flex'}, mx: { xs : 0, md : 8 }, pb : '10vh'}}>
      
      {/* Atendimentos em Grupo */}
        <Box sx={{ width: { xs : '80vw', md : '38vw'}, textAlign : 'justify', px : 5}}>
        <TitleColor start={"Atendimentos"} middle={" em"} end={" grupo"} dark={false}/>
        <Typography>
          Temos atividades terapêuticas e educacionais em grupo, onde trabalhamos o fortalecimento de vínculos através de práticas corporais, cultura e lazer para nossos assistidos(as), seus familiares e comunidade.
        </Typography>
        </Box>
        <Box sx={{ width: { xs : '80vw', md : '38vw'}, textAlign : 'justify', px : 5}}>
        
        <img src={AtendimentosGrupo} width="100%"/>
      </Box>      
    </Container>


      {/* Atendimentos Comunitários */}
    <Container sx={{display : { xs : 'grid', md : 'flex'}, mx: { xs : 0, md : 8 }, mb : '-20'}}>
         <Box sx={{ width: { xs : '80vw', md : '38vw'}, textAlign : 'justify', px : 5}}>
        <Box sx={{ position : 'relative', top : { xs: 0, md : -40}}} >
          <img src={AtendimentosComunitarios} width="100%"/>
        </Box>
      </Box>
      <Box sx={{ width: { xs : '80vw', md : '38vw'}, textAlign : 'justify', px : 5}}>
        
        <TitleColor start={"Atendimentos"} middle={""} end={" Comunitários"} dark={false}/>
        <Typography>
          Realizamos ações e projetos educativos buscando a conscientização e prevenção nos assuntos referentes ao câncer, junto à comunidade, escolas, empresas, entidades e setor público de Vinhedo e região.
        </Typography>
        </Box>          
    </Container>
    </Box>

      {/* Atendimentos Individuais */}
      <Box sx={{width:'100%', backgroundColor : themeHome.palette.secondary.main, pt: '10vh'}}>
        <Container sx={{display : { xs : 'grid', md : 'flex'}, mx: { xs : 0, md : 8 }, pb : '10vh'}}>
        <Box sx={{ width: { xs : '80vw', md : '38vw'}, textAlign : 'justify', px : 5}}>
        <TitleColor start={"Atendimentos"} middle={""} end={" Individuais"} dark={true}/>    
        <Typography sx={{ color : themeHome.palette.secondary.contrastText}}>
          Nossos atendimentos são feitos de forma humanizada, por uma equipe de profissionais especializados, capacitados e voluntários.
        </Typography>
        <Container sx={{display: {xs : 'grid', md : 'flex'}, pt : 4}}>
          <ListColumn dark={true} list={["Assistência Fraterna", "Educação física", "Enfermagem", "Estética", "Fisioterapia", "Fonoaudiologia", "Fotografia", "Nutrição"]}/>
          <ListColumn dark={true} list={["Microfisioterapia", "Odontologia", "Oncogenética", "Orientação Jurídica", "Psicologia", "Serviço Social", "Terapia Ocupacional", "Terapias integrativas"]}/>
          
        </Container>
        
        

        </Box>
        <Box sx={{ pt : {xs : 4, md : 12 }}}>
        <img src={AtendimentosIndividuais} width="90%"/>
        </Box>
        </Container >
      </Box>
      </>
    )
}