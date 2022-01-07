import React from 'react';
import Page from '../components/Page';
import useCart from '../hooks/cart';

const buildCart = (cartItems) => {
  let total = 0.0;
  const items = [];
  for (const item of cartItems) {
    const itemTotal = item.product.price * item.quantity;
    total += itemTotal;
    console.log(item);
    items.push({ ...item, total: itemTotal });
  }
  return { items, total };
};

const formatCurrency = (value) => {
  return '$' + value.toFixed(2);
};
export default function Cart() {
  const cartItems = useCart();
  const cart = cartItems && buildCart(cartItems);
  console.log(cartItems, cart);
  return (
    <Page title='Cart'>
      {cartItems && (
        <table>
          <thead className='text-2xl'>
            <tr>
              <th className='px-4 py-2'>Product</th>
              <th className='px-4 py-2'>Price</th>
              <th className='px-4 py-2'>Quantity</th>
              <th className='px-4 py-2'>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item) => (
              <tr key={item.id}>
                <td className='px-4 py-2 text-right'>{item.product.title}</td>

                <td className='px-4 py-2 text-right'>{item.product.price}</td>

                <td className='px-4 py-2 text-right'>{item.quantity}</td>
                <td className='px-4 py-2 text-right'>
                  {formatCurrency(item.total)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th></th>
              <th></th>
              <th>{formatCurrency(cart.total)}</th>
            </tr>
          </tfoot>
        </table>
      )}
    </Page>
  );
}
