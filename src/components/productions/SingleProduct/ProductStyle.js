import { styled } from '@mui/material'
import { Box } from '@mui/system'
import { Button, IconButton } from '@mui/material'
import { Colors } from '../../../styles/globalTheme'
import { slideInBottom, slideInRight } from '../../../animations'

export const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    postition: 'relative',
  },
}))

export const ProductImage = styled('img')(({ src, theme }) => ({
  src: `url${src}`,
  width: '100%',
  backgroundColor: Colors.light_gray,
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    padding: '24px',
  },
}))

export const ProductActionButton = styled(IconButton)(() => ({
  backgroundColor: Colors.white,
  margin: '4px',
}))

export const ProductFavButton = styled(ProductActionButton)(
  ({ isfav, theme }) => ({
    color: isfav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  })
)

export const ProductCartButton = styled(Button)(({ show, theme }) => ({
  width: '120px',
  fontSize: '12px',
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: '2%',
    width: '300px',
    padding: '10px 5px',
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}))

export const ProductMetaWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4px',
}))

export const ProductActionWrapper = styled(Box)(({ show, theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: show ? 'visible' : 'none',
    position: 'absolute',
    right: 0,
    top: '20%',
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}))
