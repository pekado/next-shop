import React from 'react';
import Head from 'next/head';
import Title from './Title';
import NavBar from './NavBar';

export default function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - Next Shop</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='p-8'>
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}
