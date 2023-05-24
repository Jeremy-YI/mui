import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material'
import { useUIContext } from '../../context'
import CloseIcon from '@mui/icons-material/Close'
import { DrawerCloseButton } from './DrawerStyle'
import { lighten } from 'polished'
import { Colors } from '../../styles/globalTheme'

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``

const AppDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useUIContext()

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      {isDrawerOpen && (
        <DrawerCloseButton onClick={handleDrawerClose}>
          <CloseIcon
            sx={{
              fontSize: '2.5rem',
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={isDrawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  )
}

export default AppDrawer
