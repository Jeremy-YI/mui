import React from 'react'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/Fullscreen'
import {
  Product,
  ProductActionWrapper,
  ProductImage,
  ProductFavButton,
  ProductActionButton,
  ProductCartButton,
} from './ProductStyle'
import ProductMeta from './ProductMeta'

const SingleProduct = ({ product, matches }) => {
  /**
   * product
   * image
   * meat
   * actions
   * footer
   */
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductCartButton variant="contained">Add to card</ProductCartButton>
    </>
  )
}

export default SingleProduct
