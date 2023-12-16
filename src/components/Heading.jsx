import React from 'react'

const Heading = ({name}) => {
  return (
    <h2 className='text-4xl font-bold flex justify-center pt-10'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6649be] to-[#a45dac]'>{name}</span>
    </h2>
  )
}

export default Heading;
