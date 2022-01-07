import { useQuery } from 'react-query';
import { fetchJson } from '../lib/api';

const useCart = () => {
  const query = useQuery('cart-items', async () => {
    try {
      return await fetchJson('/api/cart');
    } catch (error) {
      return error;
    }
  });
  return query.data;
};

export default useCart;
