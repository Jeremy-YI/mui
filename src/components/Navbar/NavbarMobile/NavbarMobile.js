import React from 'react'
import { AppbarContainer, AppbarHeader } from '../NavbarStyle'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Actions from '../Action'

const NavbarMobile = ({ matches }) => {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={'center'} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  )
}

export default NavbarMobile
