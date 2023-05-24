import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Slide,
  Box,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Colors } from '../../../styles/globalTheme'

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />
}

const ProductionDetails = ({ open, onClose, product }) => {
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanat"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{ backgroundColor: Colors.secondary }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          Product Title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: Colors.secondary }}>
        {product.direction}
      </DialogContent>
    </Dialog>
  )
}

export default ProductionDetails
