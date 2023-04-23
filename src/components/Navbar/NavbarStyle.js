import { Box } from '@mui/system'
import { Typography, List } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../styles/globalTheme'

// Container
export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
}))

// Header
export const AppbarHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '4rem',
  fontFamily: 'Montez, cursive',
  color: Colors.secondary,
}))

// List
export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 3,
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({ flexGrow: 0 }))

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: Colors.shaft,
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  alignContent: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}))
