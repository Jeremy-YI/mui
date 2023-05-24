import React from 'react'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/Fullscreen'
import {
  Product,
  ProductActionsWrapper,
  ProductImage,
  ProductFavButton,
  ProductAddToCart,
  ProductActionButton,
} from '../ProductStyle'
import ProductMeta from './ProductMeta'
import UseDialogModal from '../ProductionDetails/UseDialogModal'
import ProductionDetails from '../ProductionDetails/ProductionDetails'

const SingleProduct = ({ product, matches }) => {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    UseDialogModal(ProductionDetails)

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={matches ? 'row' : 'column'}>
            <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to card</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  )
}

export default SingleProduct
