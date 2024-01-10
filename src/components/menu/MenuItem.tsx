const MenuItem = () => {
  return(
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/50 hover:cursor-pointer'>
      <div className='text-center'>
        <img src="/pizza.png" alt="pizza" className='max-h-auto max-h-24 block mx-auto'/>
      </div>
      <h4 className='font-semibold my-3 text-xl'>Pepperoni pizza</h4>
      <p className='text-gray-500 text-sm'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <button className='bg-primary text-white mt-4 px-4 py-2 px-8 rounded'>Add to card $12</button>
    </div>
  )
}

export default MenuItem;
