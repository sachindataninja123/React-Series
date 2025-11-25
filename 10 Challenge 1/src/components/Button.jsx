import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-blue-500 px-6 text-white py-2 rounded-full mt-5 hover:bg-blue-800 transition-0.4s cursor-pointer'>
      {props.text}
    </div>
  )
}

export default Button
