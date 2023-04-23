import { Button, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/system'
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerImage,
  BannerDescription,
} from './BannerStyle'

const Banner = () => {
  const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6"> Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          fermentum, nisl sit amet aliquam tincidunt, nunc nisl luctus nisl, nec
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
