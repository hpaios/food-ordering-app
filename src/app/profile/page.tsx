'use client'
import Image from 'next/image';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { BaseSyntheticEvent, ChangeEvent, FormEvent, useEffect, useState } from 'react'

const ProfilePage = () => {

  const session = useSession();
  const [userName, setUserName] = useState(session?.data?.user?.name || '');
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [image, setImage] = useState('');

  const { status } = session;

  useEffect(() => {
    if(status === 'authenticated') {
      setUserName(session.data?.user?.name || '');
      setImage(session.data?.user?.image || '/google.png')
    }
  }, [session, status])

  const handleProfileInfoUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSaved(false);
    setIsSaving(true);
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: userName, image})
    })
    setIsSaving(false);
    if (response.ok) {
      setIsSaved(true)
    }
  }

  const handleFileChange = async (e: BaseSyntheticEvent) => {
    console.log(e);
    const files = e.target.files
    if(files?.length === 1) {
      const data = new FormData;
      data.set('files', files[0])
      const response = await fetch('./api/upload', {
        method: 'POST',
        body: data
      })
      const link = await response.json()
      setImage(link);
    }
  }

  if (status === 'loading') {
    return 'Loading...'
  }

  if (status === 'unauthenticated') {
    return redirect('./login')
  }

  return(
    <section className='mt-8'>
       <h1 className='text-center text-primary text-4xl mb-4'>
        Profile
      </h1>
      <div className='max-w-md mx-auto'>
        {isSaved && 
          <h2 className='text-center bg-green-100 p-4 rounded-lg mb-4'>
            Profile saved!
          </h2>
        }
        {isSaving && 
          <h2 className='text-center bg-blue-100 p-4 rounded-lg mb-4'>
            Saving...
          </h2>
        }
        <div className='flex gap-4 items-center'>
          <div className='bg-gray-100 p-4 rounded-lg max-w-[120]'>
            {image &&
               (<Image
                className='w-full h-full mb-4'
                src={image}
                alt={'photo'}
                width={75}
                height={75}
              />)
            }
            <label>
              <input type="file" className='hidden'
                onChange={(e: BaseSyntheticEvent) => handleFileChange(e)}
              />
              <span className='border rounded-lg block p-2 text-center border-gray-300 cursor-pointer'>Edit</span>
            </label>
          </div>
          <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <input type="text" placeholder='Fist and last name' value={userName} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>
            <input type="email" value={session.data?.user?.email || ''} disabled={true}/>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage;
