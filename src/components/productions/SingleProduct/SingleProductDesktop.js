import React from 'react'
import { Stack, Tooltip, Typography } from '@mui/material'
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

const SingleProductDesktop = ({ product, matches }) => {
  /**
   * product
   * image
   * meat
   * actions
   * footer
   */
  const [showOptions, setShowOptions] = React.useState(false)

  const handleMouseEnter = () => {
    setShowOptions(true)
  }

  const handleMouseLeave = () => {
    setShowOptions(false)
  }

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductCartButton show={showOptions} variant="contained">
            Add to cart
          </ProductCartButton>
        )}
        <ProductActionWrapper show={showOptions || matches}>
          <Stack direction={matches ? 'row' : 'column'}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductMeta product={product} />
    </>
  )
}

export default SingleProductDesktop
