import { Typography } from "@mui/material";
import { themeHome } from "Themes/Home";



export default function TitleColor( props : {start : string, middle: string, end: string, dark : boolean}) {


return(
  <Typography component="h1" sx={{ fontFamily : 'Dancing Script', fontWeight : 700, fontSize : { xs: '9vw', md: '4vw'}}} gutterBottom>
    <span style={{'color' : themeHome.palette.primary.main}}>{props.start}</span>
    <span style={{'color' : themeHome.palette.primary.contrastText}}>{props.middle}</span>
    { props.dark ? <span style={{'color' : themeHome.palette.secondary.contrastText}}>{props.end}</span> : <span style={{'color' : themeHome.palette.secondary.main}}>{props.end}</span> }    
  </Typography>
  
  )
}