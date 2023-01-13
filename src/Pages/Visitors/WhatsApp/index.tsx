import { Box } from "@mui/system";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Link } from "@mui/material";


export default function WhatsApp () {


return(
  <Box sx={{position : 'fixed', top: '90%', left: '80%', backgroundColor: 'green', borderRadius:50, p : 1, color : 'white'   }}>
    <a href="https://api.whatsapp.com/send?phone=551932019452&text=Ol%C3%A1%2C%20entrei%20no%20site%20do%20INSTITUTO%20SER%20COM%20%20AMOR%20e%20gostaria%20de%20saber%20sobre%3A" color='white'>
      <WhatsAppIcon fontSize="large"/>
    </a>
  </Box>)
}