"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image';
import { FormEvent, useState } from 'react'

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginInProgress(true);
    
    await signIn('credentials', {email, password, callbackUrl: '/'});
    setLoginInProgress(false);
  }
  
  return(
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>
        Login
      </h1>
      <form className='block max-w-sm mx-auto' onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          disabled={loginInProgress}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          disabled={loginInProgress}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' disabled={loginInProgress}>Login</button>
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
};

export default LoginPage;
