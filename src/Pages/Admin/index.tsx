import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TabPanelProps} from 'Interfaces/TabPanelProps'
import { ThemeProvider } from '@emotion/react';
import {themeAdmin} from '../../Themes/Admin'
import Logo from 'Assets/img/Logo.png';
import { Container } from '@mui/material';
import { TabAdmin } from 'Components/TabAdmin';
import { Diretoria } from './Diretoria';
import Blog from './Blog'
import { Balancos } from './Balancos';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    
      <div        
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>          
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>

  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={themeAdmin}>

      <Box sx={{
        backgroundColor: themeAdmin.palette.primary.main,        
        
        height: '40px',
        mt:4,
        mb:1
        }}>
        <Container sx={{justifyContent: 'space-between',
        display: 'flex',
        }}>
        <Typography variant='h6' sx={{ mt:1}}>Portal Administração</Typography>
        <Box sx={{
          position: 'relative',
          top : -25,
          display: 'flex',
          border: '1px solid grey',
          backgroundColor: 'white',          
          borderRadius: '14%',
          height: '90px',
          width: '115px'}}>
            <img src={Logo} style={{ margin:'3px'}}/></Box>
          
        </Container>


        </Box>       
      <Container sx={ { mt: 2, mb: 1 } }>
      <Box sx={{borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} >
          <Tab label="Diretoria" {...a11yProps(0)}/>
          <Tab label="Blog" {...a11yProps(1)} />
          <Tab label="Balanços" {...a11yProps(2)} />
          <Tab label="Mais" {...a11yProps(3)} />
        </Tabs>
      </Box>      
      </Container>
      <Container>
      <Container sx={{backgroundColor: themeAdmin.palette.background.default,borderRadius: '10px'}}>
        <TabPanel value={value} index={0}>
          <TabAdmin><Diretoria/></TabAdmin>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabAdmin><Blog/></TabAdmin>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabAdmin><Balancos/></TabAdmin>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabAdmin><h1>...</h1></TabAdmin>
        </TabPanel>
      </Container>

      </Container>

    </ThemeProvider>
  );
}
