import { fetchJson } from '../../lib/api';

const CMS_URL = process.env.CMS_URL;

async function handleCart(req, res) {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  try {
    const cart = await fetchJson(`${CMS_URL}/cart-items`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    res.status(200).json(cart.map(stripCartItem));
  } catch (error) {
    res.status(401).end();
  }
}

function stripCartItem(item) {
  return {
    id: item.id,
    product: {
      title: item.product.title,
      description: item.product.description,
      price: item.product.price.toFixed(2),
    },
    quantity: item.quantity,
  };
}

export default handleCart;
