import Image from 'next/image';

const HomeMenu = () => {
  return(
    <section className=''>
      <div className='absolute left-0 right-0 w-full justify-start h-full'>
        <div className='h-48 w-48 absolute left-0 text-left -top-[70px] -z-10'>
          <Image src={'/sallad1.png'} alt={'salad1-bg'} width={150} height={100}/>
        </div>
        <div className='h-48 w-48 absolute -right-12 -top-[150px] -z-10'>
          <Image src={'/sallad2.png'} alt={'salad2-bg'} width={150} height={100}/>
        </div>
      </div>
      <div className='text-center'>
        <h3 className='uppercase text-gray-500 font-semibold'>Check out</h3>
        <h2 className='text-primary font-bold text-4xl italic'>Menu</h2>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <img src="" alt="pizza" />
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default HomeMenu;