import { AnchorOutlined } from "@mui/icons-material";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import BalancoService from "Services/Balancos";
import axios from "axios";
import { useState } from "react";

export function Balancos () {

  const [ano, setAno] = useState<any>(2023)
  const [mes, setMes] = useState<any>("Janeiro")

  const form = document.getElementById("uploadBalanco");

  form?.addEventListener("submit", submitForm)

  function submitForm(e : any){
    e.preventDefault();
    const ano = document.getElementById("ano")
    const mes = document.getElementById("mes")
    const balanco = document.getElementById("balancoUploaded")
    const formData = new FormData();
  }

  return(
<>
<Typography align="center">Enviar um novo Balanço mensal:</Typography>

<form id="uploadBalanco" action='/admin/balanco/upload'>
  <div className="input-group">
    <label>Ano</label>
    <input onChange={(e) => setAno(e.target.value)}name='ano' id='ano' type='number'/>    
  </div>
  <div className="input-group">
    <label>Mês</label>
    <input onChange={(e) => setMes(e.target.value)}name='mes' id='mes' type='number'/>    
  </div>
  <div className="input-group">
    <label>Arquivo</label>
    <input id='files' type="file" multiple />
  </div>
  <button className='submit-btn' type='submit'>Upload</button>
</form>
</>
  )
  
}