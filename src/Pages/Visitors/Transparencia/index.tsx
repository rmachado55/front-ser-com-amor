import { Box, Container } from "@mui/system";
import TitleColor from "../../../Components/TitleColor";
import { themeHome } from "../../../Themes/Home";
import pastas from './pastas'
import CardDocumento from "./SubPastas";

export default function Transparencia ()
{
  return ( <>
    { pastas.map( ( pasta, index ) =>
      <Box key={ pasta.pasta } sx={ { padding: '40px 0 80px 0', backgroundColor: ( index % 2 === 0 ? themeHome.palette.secondary.main : "white" ) } }>
        <Container>
          <TitleColor start={ pasta.start } middle={ pasta.middle } end={ pasta.end } dark={ ( index % 2 === 0 ? true : false ) } />
          { pasta.subPastas.map( subPastaSelecionada =>
            <CardDocumento
              key={ subPastaSelecionada }
              pasta={ pasta.pasta }
              subPasta={ subPastaSelecionada }
              dark={ index % 2 === 0 }
            />
          ) }
        </Container>

      </Box > )
    }

  </>
  )
}