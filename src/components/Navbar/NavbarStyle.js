import { Box } from '@mui/system'
import { Typography, List, ListItemIcon, ListItemButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../styles/globalTheme'
import '@fontsource/montez'

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
// ListItemButton
export const MyListItemButton = styled(ListItemButton)(() => ({
  justifyContent: 'center',
}))

// ListItemIcon
export const MyListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    color: Colors.secondary,
  },
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

// export const ActionIconsContainerMobile = styled(Box)(() => ({
//   display: 'flex',
//   backgroundColor: Colors.shaft,
//   position: 'fixed',
//   right: '0',
//   top: '0',
//   width: '100%',
//   alignContent: 'center',
//   zIndex: 99,
//   borderTop: `1px solid ${Colors.border}`,
// }))
