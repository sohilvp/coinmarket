import React, {  createContext, useEffect, useState } from 'react'
export const  ContextCrypto =  createContext()
 const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState("USD")
   const  [currencySymbol,setCurrencySymbol] = useState("$")

   
   
   useEffect(()=>{
    if(currency==="USD"){
      setCurrencySymbol('$')
     }else{
      setCurrencySymbol('₹')
     }
   },[currency])
   
  
  return (
    <ContextCrypto.Provider value={{currency,setCurrency,currencySymbol}}>
        {children}

    </ContextCrypto.Provider>
  )
}

export default CryptoContext

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}