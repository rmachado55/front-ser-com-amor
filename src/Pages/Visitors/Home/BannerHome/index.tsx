import { Box} from '@mui/material'
import Banner from 'Assets/img/Banner.jpg'

export function BannerHome () {

return(
    <Box sx={{p:0, mt : 14}}>
      
        <img src={Banner} style={{width: '100vw'}}></img>
      
    </Box>
  )}