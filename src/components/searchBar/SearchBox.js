import React from 'react'
import { IconButton, Slide } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useUIContext } from '../../context'
import { SearchBoxContainer, SearchField } from './SearchBoxStyle'

const SearchBox = () => {
  const { isShowSearchBox, setIsShowSearchBox } = useUIContext()

  const handleClose = () => {
    setIsShowSearchBox(false)
  }

  return (
    <Slide direction="down" in={isShowSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="Search"
        />
        <IconButton>
          <SearchIcon
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: '4rem' }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  )
}

export default SearchBox
