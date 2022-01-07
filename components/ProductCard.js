import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <>
      <div className='border w-80 shadow hover:shadow-xl'>
        <Link href={`/products/${product.id}`}>
          <a>
            <Image width={320} height={240} src={product.pictureUrl} alt='' />
            <div className='p-2 flex justify-between items-baseline'>
              <h2 className='text-lg font-bold'>{product.title}</h2>
              <span>{product.price}</span>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
