import { createMuiTheme } from 'material-ui/styles'

// Colors
export const green        = '#505450'
export const lightGreen   = '#C8E6C9'
export const red          = '#F44336'
export const lightRed     = '#FFCDD2'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: green,
  primary2Color: red,
  accent1Color: lightRed,
  accent2Color: lightGreen,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

//Typography
export const typography = {
  fontFamily:
    'Roboto,"Helvetica Neue",Arial,sans-serif',
  title: {
    display: 'inline',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderBottom: '3px solid #ffffff',
    paddingBottom: 10
  },
  body1: {
    fontWeight: 500,
  }
}

export default createMuiTheme({ palette, typography })