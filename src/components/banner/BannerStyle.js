import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Colors } from '../../styles/globalTheme'
import { Button, Typography } from '@mui/material'

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  backgroundColor: Colors.light_gray,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const BannerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '420px',
  padding: '30px',
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: '1.5',
  fontSize: '72px',
  marginBottom: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
  },
}))

export const BannerImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '320px',
    height: '300px',
  },
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: '3em',
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: '1.5em',
  },
}))

// button styles
export const BannerShopButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color',
  name: 'MyShopButton',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  padding: '20px 0px',
  color: Colors.white,
  fontWeight: 'bold',
  fontSize: '16px',
  width: '90%',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0px',
    fontSize: '14px',
  },
}))
