import React from 'react'

const User = ({userDetails}) => {
    // console.log(userDetails);
  return (
    <div className='card'>
      <h1>Id = {userDetails.id}</h1>
      <h1>Name = {userDetails.name}</h1>
      <h1>age = {userDetails.age}</h1>
    </div>
  )
}

export default User
