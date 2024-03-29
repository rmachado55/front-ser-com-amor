import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TitleColor from "../../../../Components/TitleColor";
import { themeHome } from "../../../../Themes/Home";
import AtendimentosGrupo from '../../../../Assets/img/AtendimentosGrupo.png'
import AtendimentosComunitarios from '../../../../Assets/img/AtendimentosComunitarios.png'
import AtendimentosIndividuais from '../../../../Assets/img/AtendimentosIndividuais.png'
import ListColumn from "../../../../Components/ListColumn";

export default function Atendimentos ()
{

  return ( <>
    <Box id="atendimentos" sx={ { width: '100%', backgroundColor: themeHome.palette.background.default, pt: 10 } }>
      <Container sx={ { display: { xs: 'box', md: 'flex' }, mx: { xs: 0, md: 8 }, pb: 10, paddingLeft: 0 } }>

        {/* Atendimentos em Grupo */ }
        <Box sx={ { width: { xs: '90vw', md: '50vw' }, textAlign: 'justify', pb: { xs: 4, md: 12 }, pl: { xs: 2, md: 5 } } }>
          <TitleColor start={ "Atendimentos" } middle={ " em" } end={ " grupo" } dark={ false } />
          <Typography>
            Temos atividades terapêuticas e educacionais em grupo, onde trabalhamos o fortalecimento de vínculos através de práticas corporais, cultura e lazer para nossos assistidos(as), seus familiares e comunidade.
          </Typography>
        </Box>
        <Box sx={ { width: { xs: '100%', md: '38vw' }, textAlign: 'justify', px: { xs: '5%', md: 5 } } }>

          <img src={ AtendimentosGrupo } width="90%" />
        </Box>
      </Container>


      {/* Atendimentos Comunitários */ }
      <Container sx={ { display: { xs: 'grid', md: 'flex' }, mx: { xs: 0, md: 8 }, mb: '-20' } }>
        <Box sx={ { width: { xs: '100%', md: '38vw' }, textAlign: 'justify', px: 0 } }>
          <Box sx={ { position: 'relative', top: { xs: 0, md: -40 }, px: { xs: '5%', md: 5 } } } >
            <img src={ AtendimentosComunitarios } width="100%" />
          </Box>
        </Box>
        <Box sx={ { width: { xs: '90%', md: '50vw' }, textAlign: 'justify', pl: 0, pb: { xs: 5, md: 10 } } }>

          <TitleColor start={ "Atendimentos" } middle={ "" } end={ " Comunitários" } dark={ false } />
          <Typography>
            Realizamos ações e projetos educativos buscando a conscientização e prevenção nos assuntos referentes ao câncer, junto à comunidade, escolas, empresas, entidades e setor público de Vinhedo e região.
          </Typography>
        </Box>
      </Container>
    </Box>

    {/* Atendimentos Individuais */ }
    <Box sx={ { width: '100%', backgroundColor: themeHome.palette.secondary.main, py: { xs: 5, md: 10 } } }>
      <Container sx={ { display: { xs: 'grid', md: 'flex' }, mx: { xs: 0, md: 8 } } }>
        <Box sx={ { width: { xs: '90%', md: '50vw' }, textAlign: 'justify', px: { xs: 0, md: 5 } } }>
          <TitleColor start={ "Atendimentos" } middle={ "" } end={ " Individuais" } dark={ true } />
          <Typography sx={ { color: themeHome.palette.secondary.contrastText } }>
            Nossos atendimentos são feitos de forma humanizada, por uma equipe de profissionais contratados, especializados, capacitados e voluntários, apoiando os assistidos(as) nas áreas:
          </Typography>
          <Container sx={ { display: { xs: 'grid', md: 'flex' }, pt: 4 } }>
            <ListColumn dark={ true } list={ [ "Assistência Fraterna", "Educação física", "Enfermagem", "Estética", "Fisioterapia", "Fonoaudiologia", "Nutrição" ] } />
            <ListColumn dark={ true } list={ [ "Odontologia", "Orientação Jurídica", "Psicologia", "Serviço Social", "Terapia Ocupacional", "Terapias integrativas" ] } />

          </Container>



        </Box>
        <Box sx={ { pt: { xs: 4, md: 10 } } }>
          <img src={ AtendimentosIndividuais } width="100%" />
        </Box>
      </Container >
    </Box>
  </>
  )
}