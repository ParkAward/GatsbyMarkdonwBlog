import { extendTheme } from '@chakra-ui/react'
const breakpoints = {
  md: '80em',
  '2xl': '96em',
}

const customTheme = extendTheme({

  semanticTokens: {
    colors: {
      error: 'red.500',
      text: {
        default: 'gray.900',
        _dark: 'gray.50',
      },
    },
  },
})
export default extendTheme({breakpoints},customTheme)