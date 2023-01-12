import { Box} from '@mui/material'
import Banner from 'Assets/img/Banner.jpg'

export function BannerHome () {

return(
    <Box sx={{mt : {xs : 0 , md : 0}}}>

        <img src={Banner} style={{ width : '100%'}}></img>
      
    </Box>
  )}