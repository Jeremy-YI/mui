import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import NavbarMobile from './NavbarMobile/NavbarMobile'

const Appbar = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      {matches ? (
        <NavbarMobile matches={matches} />
      ) : (
        <NavbarDesktop matches={matches} />
      )}
    </>
  )
}

export default Appbar
