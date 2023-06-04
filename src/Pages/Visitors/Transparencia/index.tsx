import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import TitleColor from "../../../Components/TitleColor";
import { themeHome } from "../../../Themes/Home";
import documentos from './documentos'
import pastas from './pastas'
import { Download, PictureAsPdf } from "@mui/icons-material";

export default function Transparencia ()
{

  function CardDocumento ( pasta: string, subPasta: string, dark: boolean )
  {
    const documentosFiltrados = documentos.filter( documento => documento.pasta === pasta && documento.subPasta === subPasta )

    return (
      <Box sx={ { paddingY: '40px', borderBottom: ( dark ? '2px solid white' : '1px solid black' ) } }>
        <Typography variant="h5" sx={ { fontWeight: '900', color: ( dark ? 'white' : 'black' ) } }>{ subPasta }</Typography>
        { documentosFiltrados.map( documento =>
          <a href={ `/public/files/${ documento.pasta }/${ documento.subPasta }/${ documento.caminho }.${ documento.tipo }` }>
            <Paper sx={ { marginTop: '20px', padding: '20px', display: 'flex', overflowWrap: 'anywhere', borderRadius: '20px' } }>
              <Box sx={ { display: 'flex' } }>
                <Box sx={ { margin: '0 20px 0 0' } }>
                  <Download fontSize="large" />
                  <p>{ documento.tipo.toUpperCase() }</p>
                </Box>

                <Box sx={ { display: 'grid' } }>
                  <Typography variant={ "h6" } sx={ { fontWeight: '600' } }>{ documento.nomeDocumento }</Typography>
                  <Box sx={ { fontSize: '12px' } }>
                    <p>Ano: { documento.ano }</p>
                    <p>Arquivo: { documento.caminho }.{ documento.tipo }</p>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </a>
        ) }
      </Box > )
  }

  return ( <>
    { pastas.map( ( pasta, index ) =>
      <Box key={ pasta.pasta } sx={ { padding: '40px 0 80px 0', backgroundColor: ( index % 2 === 0 ? themeHome.palette.secondary.main : "white" ) } }>
        <Container>
          <TitleColor start={ pasta.start } middle={ pasta.middle } end={ pasta.end } dark={ ( index % 2 === 0 ? true : false ) } />
          { pasta.subPastas.map( subPastaSelecionada => <>

            { CardDocumento( `${ pasta.pasta }`, `${ subPastaSelecionada }`, ( index % 2 === 0 ) ) }

          </>
          ) }
        </Container>

      </Box > )
    }

  </>
  )
}