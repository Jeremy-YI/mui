import React from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../NavbarStyle'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Actions from '../Action'

const NavbarDesktop = ({ matches }) => {
  /**
   * AppbarContainer
   * AppbarHeader
   * List
   */
  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  )
}

export default NavbarDesktop
