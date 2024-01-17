import Image from 'next/image'
import ArrowRight from '../icons/ArrowRight'

const Hero = () => {
  return(
    <section className='hero mt-8'>
      <div className='py-8'>
        <h1 className='text-4xl font-semibold leading-12'>
          Everything<br/>
          is better<br/>
          with a&nbsp;
          <span className='text-primary'>
            pizza
          </span>
          !
        </h1>
        <p className='my-6 text-gray-500  text-sm'>
          Pizza is a missing peace that makes every day complete, a simple yet delicious joy in live
        </p>
        <div className='flex gap-4 text-sm'>
          <button className='bg-primary text-white px-4 py-2 rounded-full flex gap-2 uppercase items-center border-none justify-center'>
            Order now
            <ArrowRight />
          </button>
          <button className='flex gap-2 py-2 text-gray-600 font-semibold border-none items-center'>
            Learn more
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className='relative'>
       <Image src={'/pizza.png'} alt={'pizza'} objectFit='contain' layout='fill'/>
      </div>
    </section>
  )
}

export default Hero
