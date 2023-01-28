import { Box} from '@mui/material'
import { Container } from '@mui/system'
import BannerHorizontal from 'Assets/img/BannerHorizontal.png'
import BannerVertical from 'Assets/img/BannerVertical.png'

export function BannerHome () {

return(<>
    <Box sx={{display : {xs : 'none', md : 'flex'}}}>
        <img src={BannerHorizontal} style={{ width: '90%', paddingLeft: '5%'}}></img>      
    </Box>
    <Box sx={{display : {xs : 'flex', md : 'none'}}}>
        <img src={BannerVertical} style={{ width: '90%', paddingLeft: '5%'}}></img>      
    </Box>
    </>
  )}