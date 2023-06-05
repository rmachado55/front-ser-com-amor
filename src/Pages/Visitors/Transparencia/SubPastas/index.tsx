import { Box, Paper, Typography } from "@mui/material"
import documentos from "../documentos"
import { Download } from "@mui/icons-material"
import { Container, fontSize, width } from "@mui/system"

interface Props
{
  pasta: string
  subPasta: string
  dark: boolean
}

const SubPastas: React.FC<Props> = ( { pasta, subPasta, dark } ) =>
{
  const documentosFiltrados = documentos.filter( documento => documento.pasta === pasta && documento.subPasta === subPasta )

  return (
    <Box sx={ { paddingBottom: '40px', borderTop: ( dark ? '2px solid white' : '2px solid black' )} }>
      <Typography variant="h6" sx={ { paddingY: '20px', fontWeight: '900', color: ( dark ? 'white' : 'black' ), whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'  } }>{ subPasta }</Typography>
      <Container sx={ { display: 'flex', gap: '20px', flexWrap: 'wrap' } }>
        { documentosFiltrados.map( documento =>
          <a key={ documento.nomeDocumento } href={ `arquivos/${ documento.caminho }.${ documento.tipo }` }>
            <Paper sx={ { padding: { xs: '5px 5px 5px 10px', md: '10px 20px 10px 20px' }, display: 'flex', overflowWrap: 'anywhere', borderRadius: '10px', width: { xs: '80vw', md: '38vw', height: { xs: '40px', md: '70px' } } } }>
              <Box sx={ { display: 'flex' } }>
                <Box sx={ { margin: '0 20px 0 0' } }>
                  <Download fontSize="large" />
                  <p>{ documento.tipo.toUpperCase() }</p>
                </Box>
                <Box sx={ { display: 'grid' } }>
                  <Typography sx={ { fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'  } }>{ documento.nomeDocumento }</Typography>
                  <Box sx={ { fontSize: { xs: '10px', md: '12px' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }>
                    <p>Ano: { documento.ano }</p>
                    <p>Arquivo: { documento.caminho }.{ documento.tipo }</p>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </a>
        ) }
      </Container>
    </Box > )
}

export default SubPastas