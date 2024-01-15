
"use client"
import Image from 'next/image';
import { useState } from 'react'

const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
    fetch('/api/register',
    {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
    })
  }

  return(
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>
        Register
      </h1>
      <form className='block max-w-sm mx-auto'onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button className='flex gap-4 justify-center items-center'>
          <Image src={'/google.png'} alt={'Login with google'} width={32} height={32}/>
          Login with google
        </button>
      </form>
    </section>
  )
}

export default RegisterPage;
