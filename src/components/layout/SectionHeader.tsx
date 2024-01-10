interface ISectionHeader {
  subHeader: string;
  mainHeader: string;
}

const SectionHeader = ({ subHeader, mainHeader }: ISectionHeader) => {
  return(
    <>
      <h3 className='uppercase text-gray-500 font-semibold'>
        {subHeader}
      </h3>
      <h2 className='text-primary font-bold text-4xl italic'>
        {mainHeader}
      </h2>
    </>
  )
}

export default SectionHeader;
