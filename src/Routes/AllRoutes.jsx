import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Page/Cart'
import MenProducts from '../Components/Page/Basket'
import OrderSuccessfull from '../Components/All_smalle_Components/OrderSuccessfull'
import PaymentForm from '../Components/All_smalle_Components/PaymentForm'
import SingleProductPage from '../Components/All_smalle_Components/SingleProductPage'






const AllRoutes = () => {


  return (
    <div>

      <Routes>



        <Route path='/'
          element={<MenProducts />} />



        <Route path='/products/:id' element={

          <SingleProductPage />

        } />

        <Route path='/cart'
          element={<Cart />} />

        <Route path='/wishlist'
          element={<h1>CART PAGE</h1>} />

        <Route path='/checkout/payment'
          element={<PaymentForm />} />
        <Route path='/OrderSuccessfull'
          element={<OrderSuccessfull />} />

      </Routes>

    </div>
  )
}

export default AllRoutes
