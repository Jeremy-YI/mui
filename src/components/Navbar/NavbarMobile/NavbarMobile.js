import React from 'react'
import { AppbarContainer, AppbarHeader } from '../NavbarStyle'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Actions from '../Action'
import { useUIContext } from '../../../context'

const NavbarMobile = ({ matches }) => {
  const { setIsDrawerOpen } = useUIContext()
  const { setIsShowSearchBox } = useUIContext()

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true)
  }

  const handleSearch = () => {
    setIsShowSearchBox(true)
  }

  return (
    <AppbarContainer>
      <IconButton onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={'center'} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  )
}

export default NavbarMobile
