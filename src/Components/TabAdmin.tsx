import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { themeAdmin } from 'Themes/Admin';
import { Children } from 'react';


export function TabAdmin(props : {children : JSX.Element}) {
  return(

      <Paper
        sx={ {
          mb:2,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        } }
      >
      {props.children}
      </Paper>



    
)

}