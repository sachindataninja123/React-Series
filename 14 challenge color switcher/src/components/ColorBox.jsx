import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div>
      <div style={{
        backgroundColor : color,
      }} className='m-auto w-[300px] h-[300px] bg-[red] rounded-3xl mt-10 font-extrabold text-center content-center border-2 '>{color.toUpperCase()}</div>
    </div>
  )
}

export default ColorBox
