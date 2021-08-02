import React from 'react'
import App from './App'
import configureStore from './Store/configureStore'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'


const store=configureStore()
console.log("store")
 console.log(store.getState())

store.subscribe(()=>{
   console.log('store updated',store.getState())
 })

ReactDOM.render(
   < Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
)

