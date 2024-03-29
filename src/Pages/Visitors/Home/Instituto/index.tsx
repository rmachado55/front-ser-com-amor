import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstitutoImg from '../../../../Assets/img/Instituto.png'
import TitleColor from "../../../../Components/TitleColor";

export default function Instituto ()
{
  return (
    <Container id="instituto" sx={ { pb: { xs: 5, md: 10 }, display: { xs: 'grid', md: 'flex' } } }>
      <Box sx={ { width: { xs: '100%', md: '50%' }, py: { xs: 2, md: 4 } } }>
        <TitleColor start={ "Somos" } middle={ " com" } end={ " Amor" } dark={ false } />
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
      <Box sx={ { width: { xs: '100%', md: '50%' }, textAlign: 'justify', px: { xs: 0, md: 5 } } }>
        <img src={ InstitutoImg } width="90%" />
      </Box>
    </Container>
  )
}