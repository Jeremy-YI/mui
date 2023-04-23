import React from 'react'
import { MyList } from './NavbarStyle'
import { ListItemButton, ListItemIcon, Divider } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Colors } from '../../styles/globalTheme'
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from './NavbarStyle'

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop
  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  )
}

export default Actions
