import React from 'react'
import { ProductMetaWrapper } from './ProductStyle'
import { Typography } from '@mui/material'

const ProductMeta = ({ product, matches }) => {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'} lineHeight={2}>
        ${product.price}
      </Typography>
    </ProductMetaWrapper>
  )
}

export default ProductMeta
