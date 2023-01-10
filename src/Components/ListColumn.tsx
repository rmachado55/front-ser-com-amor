import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

import { themeHome } from 'Themes/Home';


export default function ListColumn (props : { dark : boolean, list : string[]}) {
  
  return(
  
    <Box sx={{display : "grid", pr: 3}}>    
    {props.list.map((item) => 
    <Typography component={"h3"} color={ props.dark ? themeHome.palette.secondary.contrastText : themeHome.palette.primary.contrastText} sx={{py : 1, fontSize : 'medium'}}>
      <FiberManualRecordIcon fontSize='inherit' color='primary' />
     {` ${item}`}
    </Typography>    
    )}    
    </Box>
      

  
   )
}