import React from 'react'
import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { FooterTitle, SubscribeText } from './FooterStyle'
import { Colors } from '../../styles/globalTheme'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import SendIcon from '@mui/icons-material/Send'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.shaft,
        color: Colors.white,
        padding: { xs: 1, sm: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* About us */}
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla
            necessitatibus eveniet voluptatibus, omnis commodi mollitia
            praesentium vero quidem officiis?
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <FacebookIcon sx={{ mr: 2 }} />
            <TwitterIcon sx={{ mr: 2 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        {/* Information */}
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Polocy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; cONDITIONS
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        {/* My account */}
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">My account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        {/* Contact us */}
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Newsletter</FooterTitle>
          <Stack>
            <SubscribeText
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Stack spacing={2}>
              <Button
                startIcon={<SendIcon sx={{ color: Colors.white }} />}
                sx={{ mt: 2, mb: 2 }}
                variant="contained"
              >
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
