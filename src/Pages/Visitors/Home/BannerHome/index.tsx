import { Box } from '@mui/material'
import { Container } from '@mui/system'
import BannerHorizontal from '../../../../Assets/img/CapaHorizontal.jpg'
import BannerVertical from '../../../../Assets/img/CapaVertical.jpg'

export function BannerHome ()
{

    return ( <>
        <Container>
            <Box sx={ { display: { xs: 'none', md: 'flex' }, mb: 10 } }>
                <img src={ BannerHorizontal } style={ { width: '100%', paddingLeft: '0%' } }></img>
            </Box>
        </Container>
        <Box sx={ { display: { xs: 'flex', md: 'none' } } }>
            <img src={ BannerVertical } style={ { width: '100%', paddingLeft: '0%' } }></img>
        </Box>
    </>
    )
}