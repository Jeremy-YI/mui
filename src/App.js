import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/globalTheme'
import Appbar from './components/Navbar'
import Banner from './components/banner/Banner'
import Promotions from './components/promotions/Promotions'
import Productions from './components/productions/Productions'

const App = () => {
  useEffect(() => {
    document.title = 'MUI - Home'
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: '#fff' }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent="center" sx={{ padding: '4px' }}>
          <Typography variant="h4">Our Product</Typography>
        </Box>
        <Productions />
      </Container>
    </ThemeProvider>
  )
}

export default App
