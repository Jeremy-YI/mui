import React from 'react'
import { MyList } from './NavbarStyle'
import { Divider } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyListItemIcon,
  MyListItemButton,
} from './NavbarStyle'

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop
  return (
    <Component>
      <MyList type="row">
        <MyListItemButton>
          <MyListItemIcon>
            <ShoppingCartIcon />
          </MyListItemIcon>
        </MyListItemButton>
        <Divider orientation="vertical" flexItem />
        <MyListItemButton>
          <MyListItemIcon>
            <FavoriteIcon />
          </MyListItemIcon>
        </MyListItemButton>
        <Divider orientation="vertical" flexItem />
        <MyListItemButton>
          <MyListItemIcon>
            <PersonIcon />
          </MyListItemIcon>
        </MyListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  )
}

export default Actions
