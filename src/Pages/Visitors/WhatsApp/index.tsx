import { Box } from "@mui/system";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Link } from "@mui/material";


export default function WhatsApp () {


return(
  <Box sx={{position : 'fixed', top: '90%', left: '80%', backgroundColor: 'green', borderRadius:50, p : 1, color : 'white'   }}>
    <a href="https://wa.me/5519982795343?text=Ol%C3%A1%2C%20visitei%20o%20site%20do%20Instituto%20Ser%20com%20Amor%20e%20gostaria%20de%20saber%3A" color='white'>
      <WhatsAppIcon fontSize="large"/>
    </a>
  </Box>)
}