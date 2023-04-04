import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCrypto } from '../../CryptoContext'
import './navbar.css'
const Navbar = () => {
  const {currency,setCurrency} = useContext(ContextCrypto)
  console.log(currency)
  return (
    <div>
      <div className="nav-container">
      <Link to='/'>CoinMarket</Link>
      <select onChange={e=>setCurrency(e.target.value)} className='selection'>
        <option value={"USD"}>USD</option>
        <option value={"INR"}>INR</option>
      </select>
      </div>
    </div>

  )
}

export default Navbar