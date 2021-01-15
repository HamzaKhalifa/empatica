import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux'; 
import IOrder from '../../../store/orders/types/IOrder';
import { deleteOrderRequest } from '../../../store/orders/actionCreators';
import Colors from '../../../theme/colors';
import Button from '../../../components/button';

import './style.css';

interface IOrdersList {
  orders: IOrder[]
}

type ComputedValues = {
  total: number,
  totalAfterDiscount: number,
  totalDiscount: number;
}

const OrdersList: React.FC<IOrdersList> = (props: IOrdersList) => {
  const dispatch = useDispatch();

  const deleteOrder = (orderId: number) => {
    dispatch(deleteOrderRequest(orderId));
  }

  // Create a variable that should only update when the orders are updated.
  let computedValuesMap: Map<number, ComputedValues> = useMemo(() => {
    let result = new Map<number, ComputedValues>();
    props.orders.forEach(order => {
      let computedValues: ComputedValues = {
        total: 0,
        totalAfterDiscount: 0,
        totalDiscount: 0
      }

      order.items.forEach(item => {
        computedValues.total += item.amount;
      })

      order.discounts.forEach(discount => {
        switch(discount.type) {
          case 'percent': 
            computedValues.totalDiscount += (computedValues.total * discount.value) / 100;
            break;
          case 'amount':
            computedValues.totalDiscount += discount.value;
            break;
        }
      })
      
      computedValues.totalAfterDiscount = Math.max(computedValues.total - computedValues.totalDiscount, 0);
      
      result.set(order.id, computedValues);
    })

    return result;
  }, [props.orders])

  console.log('computed values', computedValuesMap.get(1));
  return (
    <div className="orders_list">
      <h2>Orders List</h2>
      <div className="orders">
        <div className="order">
          <span className='order_element'>Order #</span>
          <span className='order_element'>Carrier</span>
          <span className='order_element'>Tracking Status</span>
          <span className='order_element'>Status</span>
          <span className='order_element'>Total</span>
          <span className='order_element'>Total Discount</span>
          <span className='order_element'>Actual Total</span>
          <span className='order_element'>--</span>
        </div>
        {props.orders.map((order, index) => (
          <div key={index} className='order'>
            <span className='order_element'>{order.ref}</span>
            <span className='order_element'>{order.tracking ? order.tracking.carrier : '--'}</span>
            <span className='order_element'>{order.tracking ? order.tracking.status : '--'}</span>
            <span className='order_element'>{order.status}</span>
            <span className='order_element'>{computedValuesMap.get(order.id)?.total}$</span>
            <span className='order_element'>{computedValuesMap.get(order.id)?.totalDiscount}$</span>
            <span className='order_element'>{computedValuesMap.get(order.id)?.totalAfterDiscount}$</span>
            <span className='order_element'>
              <Button 
                customStyle={{ fontSize: 12 }}
                backgroundColor={Colors.red}
                hoverBackgroundColor={Colors.white}
                hoverTextColor={Colors.red}
                text='Delete'
                textColor={Colors.white}
                horizontalPadding={10}
                verticalPadding={10}
                onClick={() => {deleteOrder(order.id)}}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrdersList
