import Link from 'next/link';
import { useSignOut, useUser } from '../hooks/user';

export default function NavBar() {
  const user = useUser();

  const signOut = useSignOut();
  console.log(user);
  return (
    <nav className='px-2 py-1'>
      <ul className='flex gap-2'>
        <li className='text-lg font-extrabold'>
          <Link href='/'>
            <a>Next Shop</a>
          </Link>
        </li>
        <li role='separator' className='flex-1'></li>
        {user ? (
          <>
            <li>
              <Link href='/cart'>
                <a>Cart</a>
              </Link>
            </li>
            <button onClick={signOut}>
              <li>Sign Out</li>
            </button>
          </>
        ) : (
          <li>
            <Link href='/sign-in'>
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
