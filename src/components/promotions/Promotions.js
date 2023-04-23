/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { PromotionContainer, MessageText } from './PromotionStyle'
import { Box } from '@mui/system'

import { Slide } from '@mui/material'

const messages = [
  '20% off on your first order!',
  'Summer sale starts now, visit any store.',
  'Please like and subscribe :)',
]

const Promotions = () => {
  const [message, setMessage] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000)

    const intervalId = setInterval(() => {
      // get next message
      setMessage((i) => (i + 1) % messages.length)
      // slide in
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }, 4000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    // ref={containerRef}
    <PromotionContainer>
      <Slide
        // container={containerRef.current}
        direction={show ? 'left' : 'right'}
        in={show}
        timeout={{ enter: 1000, exit: 100 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MessageText>{messages[message]}</MessageText>
        </Box>
      </Slide>
    </PromotionContainer>
  )
}

export default Promotions
