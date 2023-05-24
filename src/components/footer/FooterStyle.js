import { styled } from '@mui/material/styles'
import { TextField, Typography } from '@mui/material'
import { Colors } from '../../styles/globalTheme'

export const FooterTitle = styled(Typography)(() => ({
  textTransform: 'uppercase',
  marginBottom: '16px',
}))

export const SubscribeText = styled(TextField)(() => ({
  '.MuiInputLabel-root': {
    colors: Colors.secondary,
  },
  '.MuiInput-root::before': {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
}))
