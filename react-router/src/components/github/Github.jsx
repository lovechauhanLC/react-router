import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData() ;

  return (

    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' widht={380} />
    </div>
  )
}

export default Github

export const gitHubInfo = async  () => {
  const response =  await fetch('https://api.github.com/users/lovechauhanLC')
  return response.json()
}