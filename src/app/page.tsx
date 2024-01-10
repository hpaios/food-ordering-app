import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeader from '@/components/layout/SectionHeader'

const Home = () => {
  return (
   <>
    <Header />
    <Hero/>
    <HomeMenu />
    <section className='text-center my-16'>
      <SectionHeader subHeader={'Our story'} mainHeader={'About us'} />
      <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates fugit accusantium eius ullam laudantium amet minus! Sint fugit quos modi. Nulla labore amet ab libero nesciunt ipsum unde esse.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates fugit accusantium eius ullam laudantium amet minus! Sint fugit quos modi. Nulla labore amet ab libero nesciunt ipsum unde esse.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates fugit accusantium eius ullam laudantium amet minus!
        </p>
      </div>
    </section>
    <section className='text-center my-8'>
      <SectionHeader
        subHeader={'Don\'t hesitate'}
        mainHeader={'Contact us'}
      />
      <div className='mt-8'>
        <a className='text-4xl underline text-gray-500' href="tel:+123456789">+12 345-67-89</a>
      </div>
    </section>
    <footer className='border-t p-8 text-center text-gray-500 mt-16'>
      &copy; 2023 All rights reserved 
    </footer>
   </>
  )
}


export default Home
