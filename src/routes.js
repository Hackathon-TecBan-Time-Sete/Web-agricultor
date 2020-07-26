import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login/index'
import ProductItens from './pages/ProductItem/index'
import Request from './pages/PayRequest/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} exact path='/' />
      <Route component={Login} exact path='/login' />
      <Route component={ProductItens} exact path='/home' />
      <Route component={Request} exact path='/cadastrarPedido' />
    </BrowserRouter>
  )
}

export default Routes
