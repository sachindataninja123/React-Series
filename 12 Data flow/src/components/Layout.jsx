import React from 'react'
import Hero from './Hero'
import About from './About'

const Layout = (props) => {
    console.log(props);
  return (
    <div  className='p-10 h-[80vh] bg-amber-200'>
      <p >layout</p>
      <Hero data={props.data} />
      <About data={props.data} />
    </div>
  )
}

export default Layout
