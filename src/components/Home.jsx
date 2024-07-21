import React from 'react'
import './CSS/home.css'
import Button from './Button'
const Home = () => {
  return (
    <div>
        <h1 className='heading'>Unleash the Thrill of Winning Big!</h1>

        <div className="buttons">
            <Button title="Perticipate"/>
            <Button title="Create Lottery"/>
        </div>
    </div>
  )
}

export default Home