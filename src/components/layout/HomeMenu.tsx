import Image from 'next/image';
import MenuItem from '../menu/MenuItem'
import SectionHeader from './SectionHeader'

const HomeMenu = () => {
  return(
    <section className=''>
      <div className='absolute left-0 right-0 w-full justify-start'>
        <div className='h-48 w-48 absolute left-0 text-left -top-[70px] -z-10'>
          <Image src={'/sallad1.png'} alt={'salad1-bg'} width={150} height={100}/>
        </div>
        <div className='h-48 w-48 absolute -right-12 -top-[150px] -z-10'>
          <Image src={'/sallad2.png'} alt={'salad2-bg'} width={150} height={100}/>
        </div>
      </div>
      <div className='text-center mb-4'>
       <SectionHeader mainHeader={'Menu'} subHeader={'Check out'}/>
      </div>
      <div className='grid grid-cols-3 gap-4'>
       <MenuItem />
       <MenuItem />
       <MenuItem />
       <MenuItem />
       <MenuItem />
       <MenuItem />
      </div>
    </section>
  )
}

export default HomeMenu;