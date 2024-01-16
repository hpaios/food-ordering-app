
"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react'

const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e: HTMLFormElement) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
   const response = await fetch('/api/register',
   {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
    });

   if(response.ok) {
    setUserCreated(true);
   } else {
    setError(true);
   }

   setCreatingUser(false);
  }

  return(
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>
        Register
      </h1>
      {
        userCreated && (
          <div className='mt-4 text-center'>
            User created. <br/>
            Now you can {' '}
            <Link  href={'./login'} className='underline'>
              login &raquo;
            </Link>
          </div>
        )
      }
      {
        error && (
          <div className='mt-4 text-center'>
            Error <br />
            Please try again late 
          </div>
        )
      }
      <form className='block max-w-sm mx-auto'onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          disabled={creatingUser}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          disabled={creatingUser}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' disabled={creatingUser}>Register</button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button className='flex gap-4 justify-center items-center'>
          <Image src={'/google.png'} alt={'Login with google'} width={32} height={32}/>
          Login with google
        </button>
        <div className='text-center my-4 text-gray-500 border-t pt-4'>
          Existing account? {' '}
          <Link href={'./login'} className='underline'>login here &raquo;</Link>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage;
