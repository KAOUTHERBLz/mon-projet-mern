import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderCard from '../../Components/OrderCrad/OrderCard'
import { getOrders } from '../../JS/Actions/order'


const Order = () => {
    const dispatch =  useDispatch()
    const listOrders= useSelector((state) => state.orderReducer.listOrder)

    useEffect(() => {
        dispatch(getOrders())
      }, [dispatch])

  return (
    <div>
        <h1 className='Produit'>ORDERS</h1>
      
        {listOrders.map((el)=> <OrderCard newOrders={el} key={el.id}/>)}
        </div>
   
  )
}

export default Order