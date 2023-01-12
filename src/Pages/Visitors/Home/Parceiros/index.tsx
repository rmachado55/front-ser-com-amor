import { Container } from "@mui/system";
import TitleColor from "Components/TitleColor";
import { Marcas } from "./Marcas";
import { Box } from "@mui/material";






export default function Parceiros () {


return(
  <Container sx={{py : 12, textAlign : "center"}}>
    <TitleColor start={''} middle={''} end={'Parceiros'} dark={false}/>
    <Container sx={{display: "flex", flexWrap : "wrap"}}>
    {Marcas.map(marca =>
    <Box sx={{ width: {xs : "46%", md: "16%"}, p: "2%"}}>
      <a href={marca.url} target="_blank">
        <img src={`./src/Assets/img/${marca.file}`} alt={`Logo do parceiro ${marca.name}`} width="100%"/>
      </a>
    </Box>
      )}
    </Container>
  </Container>
  )
}