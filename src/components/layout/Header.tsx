'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {

  const session = useSession();
  const { status } = session;
  console.log(session);
  return (
    <header className='flex items-center justify-between'>
    <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
      <Link href="/" className='text-primary font-semibold'>
        ST PIZZA
      </Link>
      <Link href={'/'}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
    </nav>
    <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
      {status === 'authenticated' && (
         <button
          onClick={() => signOut({callbackUrl: '/login'})}
          className='bg-primary text-white rounded-full px-8 py-2 border-none'>
            Logout
          </button>
      )}
      {status === 'unauthenticated' && (
        <>
         <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className='bg-primary text-white rounded-full px-8 py-2'>Register</Link>
        </>
      )}
    </nav>
  </header>
  );
}