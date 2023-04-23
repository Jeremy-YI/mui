import { useTheme } from '@mui/material/styles'
import { Container, Grid, useMediaQuery } from '@mui/material'
import { products } from '../../data'
import SingleProduct from './SingleProduct/SingleProduct'
import SingleProductDesktop from './SingleProduct/SingleProductDesktop'

const Productions = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const renderProduct = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={'column'}
      alignItems="center"
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ))

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: '20px 4px 10px 4px' }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {renderProduct}
      </Grid>
    </Container>
  )
}

export default Productions
