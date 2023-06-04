import { Typography } from "@mui/material";
import { themeHome } from "../Themes/Home";

export default function TitleColor ( props: { start: string, middle: string, end: string, dark: boolean } )
{

  return (
    <Typography component="h1" sx={ { fontFamily: 'Swanky and Moo Moo', fontSize: { xs: '36px', md: '54px' } } } gutterBottom>
      <span style={ { 'color': themeHome.palette.primary.main } }>{ props.start }</span>
      <span style={ { 'color': themeHome.palette.primary.contrastText } }>{ props.middle }</span>
      { props.dark ? <span style={ { 'color': themeHome.palette.secondary.contrastText } }>{ props.end }</span> : <span style={ { 'color': themeHome.palette.secondary.main } }>{ props.end }</span> }
    </Typography>

  )
}