import { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { DrawerSidebar } from '../hooks/useDrawerSidebar'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DrawerSidebar>
      <Component {...pageProps} />
      </DrawerSidebar>
    </ChakraProvider>
  )
}

export default MyApp
