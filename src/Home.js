import React from 'react'
import logo from './logo.png';

function Home() {
  return (
    <div style={{margin:'0',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
        <img src={logo} />
    </div>
  )
}
export default Home;