import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const nombres = useSelector(state => state.characters);

  return (
    <div>
      <h1>Home</h1>
      {nombres?.map(e => <p>{e.name}</p>)}
    </div>
    
  )
}

export default Home