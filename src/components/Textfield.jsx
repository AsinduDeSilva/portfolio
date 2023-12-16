import React from 'react'

const Textfield = ({title, placeholder, value, setValue, error}) => {
  return (
    <div className={`mx-4 md:mx-24 lg:mx-32 pt-7`}>
        <label htmlFor="name" className="block font-semibold leading-6 text-white">
            {title}
        </label>
        <div className="mt-3 rounded-md bg-[#212326]">
            <input
                type="text"
                name={title}
                className="bg-[#212326] block w-full rounded-md border-0 focus:outline-none py-2 pl-7 pr-20 text-white  placeholder:text-gray-300 placeholder:text-opacity-30 focus:ring-2 focus:ring-inset focus:ring-[#6649bec5] sm:text-sm sm:leading-6"
                placeholder={placeholder}
                value={value}
                onChange={e=> setValue(e.target.value)}
            />    
        </div>
        {error ? (
          <p className='text-red-700 text-[13px] ml-7 mt-2'>Enter a valid {title.toLowerCase()}</p>
        ) :null}
    </div>
  )
}

export default Textfield;
