import React, {  useContext } from 'react'
import { ContextCrypto ,numberWithCommas} from '../../CryptoContext'
import './singlecoin.css'
const SingleCoin = (props) => {
   const {currencySymbol} = useContext(ContextCrypto)
    const  {image,name,current_price,market_cap_rank,large} =props.data 
  return (
    
    <div className='single-container' >
        <div className="image-section">
            <img src={image ||large} alt="" />
        </div>
        <div className="text-container">
            <h2>{name}</h2>
            <p>{currencySymbol} {current_price<1?current_price:numberWithCommas(current_price)}</p>
                <div className="ranks"><h1>{market_cap_rank}</h1></div>
        </div>

    </div>
    
    
  )
}

export default SingleCoin