import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuRouter from './MenuRouter'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <MenuRouter />
    </ChakraProvider>
  </React.StrictMode>,
)
