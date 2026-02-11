import React,{memo} from 'react'

const Child = () => {

console.log("child rendering")

  return (
    <div>
      <h1 className='child'>Child Component</h1>
    </div>
  )
}

export default memo(Child)
