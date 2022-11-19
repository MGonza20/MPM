import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <BrowserRouter data-testid={'index-test'}>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
