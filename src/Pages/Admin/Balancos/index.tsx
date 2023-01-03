import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

export function Balancos () {

  return(
<Grid container spacing={2}>
<Grid item xs={6}>
<Typography align="center">Enviar um novo Balanço mensal:</Typography>
<Typography>Mês e ano de referência:</Typography>
<FormControl>
  <InputLabel id="mesLabel">Mês</InputLabel>
  <Select sx={{ mb: 2}}
    labelId="mesLabel"
    id="mes"
    label="Mês"
    autoWidth >
    <MenuItem value={1}>Janeiro</MenuItem>
    <MenuItem value={2}>Fevereiro</MenuItem>
    <MenuItem value={3}>Março</MenuItem>
    <MenuItem value={4}>Abril</MenuItem>
    <MenuItem value={5}>Maio</MenuItem>
    <MenuItem value={6}>Junho</MenuItem>
    <MenuItem value={7}>Julho</MenuItem>
    <MenuItem value={8}>Agosto</MenuItem>
    <MenuItem value={9}>Setembro</MenuItem>
    <MenuItem value={10}>Outubro</MenuItem>
    <MenuItem value={11}>Novembro</MenuItem>
    <MenuItem value={12}>Dezembro</MenuItem>
  </Select>

  <InputLabel id="anoLabel">Ano</InputLabel>
  <Select sx={{ mb: 2}}
    labelId="anoLabel"
    id="ano"
    label="Ano"
    autoWidth
  >
    <MenuItem value={23}>2023</MenuItem>
    <MenuItem value={24}>2024</MenuItem>
    <MenuItem value={25}>2025</MenuItem>    
  </Select>
  <Typography>Selecione o Arquivo: <input type='file'/></Typography>
  <Button variant="outlined">Enviar</Button>
</FormControl>
</Grid>
</Grid>  
  )
  
}