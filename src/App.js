import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/globalTheme'
import Appbar from './components/Navbar'
import Banner from './components/banner/Banner'
import Promotions from './components/promotions/Promotions'
import Productions from './components/productions/Productions'
import Footer from './components/footer/Footer'
import AppDrawer from './components/drawer/AppDrawer'
import SearchBox from './components/searchBar/SearchBox'
import { UIProvider } from './context'

const App = () => {
  useEffect(() => {
    document.title = 'MUI - Home'
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: '#fff' }}>
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent="center" sx={{ padding: '4px' }}>
            <Typography variant="h4">Our Product</Typography>
          </Box>
          <Productions />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
