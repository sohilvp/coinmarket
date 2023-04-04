import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextCrypto ,numberWithCommas} from "../../CryptoContext";
import "./coins.css";
import Loading from '../../Components/Loading/Loading'
import ReactHtmlParser from 'html-react-parser';
import {IoArrowBack} from 'react-icons/io5'

const Coins = () => {
  const {currency,currencySymbol} = useContext(ContextCrypto)
  const [singleCoin, setSingleCoin] = useState([]);
  const { id } = useParams();
  const [loading,setLoading] =useState(true)

  const filteredData = async () => {
    const API_URL = `https://api.coingecko.com/api/v3/coins/${id}`;
    const res = await fetch(API_URL);
    const datas = await res.json();
    setSingleCoin(datas);
    setLoading(false)
  };

  useEffect(() => {
    filteredData();
    // eslint-disable-next-line
  }, [id,currency]);

  

  console.log("this id", id);
  console.log("from single", singleCoin);
  return (
    <div>
      {loading?<Loading />:[singleCoin].map((items) => {
        const {name,symbol,image:{large},market_cap_rank,market_data:{atl,current_price:{usd,inr},price_change_24h,ath,ath_change_percentage,market_cap,total_volume,high_24h,low_24h,circulating_supply,total_supply,max_supply,atl_change_percentage,price_change_percentage_24h},links:{homepage},description} = items
        const {market_data:{price_change_percentage_7d,price_change_percentage_14d,price_change_percentage_30d,price_change_percentage_60d,price_change_percentage_200d,price_change_percentage_1y} } = items
        return (
          <React.Fragment>
            <Link to={'/'} >
          <div className="back-to-home">
              <IoArrowBack  />
            </div>
            </Link>
          <div className="coins-container" key={items.id} > 
          
          <div className="style-container  left-section-container" >
          <img src={large} alt="" />
           <h1 style={name?.length > 11 ?{fontSize:"3rem"}:{fontSize:"4.5rem"}}>{name}</h1>
           <h2>{symbol}</h2>
           <h3>Rank<span><h1>{market_cap_rank}</h1></span></h3>
           <h2>Current Price :{currencySymbol} {currency==='USD'?numberWithCommas?.(usd):numberWithCommas?.(inr)}</h2>
           <h3> Price Change 24h : {currencySymbol} {currency==='USD'?numberWithCommas?.(price_change_24h.toFixed(2)):numberWithCommas?.((price_change_24h*(inr/usd)).toFixed(2))}</h3>
           <h3> Price Change 24h % : {price_change_percentage_24h.toFixed(2)} %</h3>
           

          </div>
          <div className=" right-section-container">
            <div className="basics">
          <div className=" style-container dayLH">
           <p>Low 24h/High 24h: {currencySymbol}<span className="low"> {currency==='USD'?numberWithCommas(low_24h.usd):numberWithCommas(low_24h.inr)}</span>  / {currencySymbol} <span className="high"> {currency==='USD'?(high_24h.usd):(high_24h.inr)}</span></p>

           </div>

            <div className=" style-container ath-container">
          <p>ATH : <span className="ath-span"> {currencySymbol} {currency==='USD'?(ath.usd):(ath.inr)}</span> / <span className="ath-percent"> {currency==='USD'?(ath_change_percentage.usd).toFixed(2):ath_change_percentage.inr} %</span></p>
           
           <p>ATL : <span className="atl-span"></span>{currencySymbol} {currency==='USD'?atl.usd:atl.inr} / <span  className="atl-percent">{currency==='USD'?(atl_change_percentage.usd).toFixed(2):atl_change_percentage.inr} %</span></p>
           </div>
           <div className=" style-container macp-container">
           <p>Market Cap: {currencySymbol} {currency==='USD'?numberWithCommas(market_cap.usd):numberWithCommas(market_cap.inr)}</p>
           <p> 24H Trading Volume: {currencySymbol} {currency==='USD'?numberWithCommas(total_volume.usd):numberWithCommas(total_volume.inr)}</p>

           </div>

           <div className=" style-container supplay-container">
           <p>Total Supply : {(total_supply)?numberWithCommas(total_supply.toFixed(0)):	"∞"}</p>
           <p>Circulating Supply : {(circulating_supply)?numberWithCommas(circulating_supply.toFixed(0)):"∞"}</p>
           
           <p>Max Supply : {(max_supply)?numberWithCommas(max_supply): "∞"}</p>
            </div>
            </div>
            <div className="center-section">
            <div className="style-container link-conatiner"><p> For More Visit :<a href={homepage}>{homepage}</a></p></div>

            <div className=" style-container return-container">
              <div style={{textAlign:"center"}}>Return</div>
              <div className="return-sub">
              <div className="single-return">
                <p>7d</p>
                <hr/>
                <p>{price_change_percentage_7d.toFixed(2)}%</p>  
              </div>
              <div className="single-return">
                <p>14d</p>
                <hr/>
                <p>{price_change_percentage_14d.toFixed(2)}%</p>
              </div>
              <div className="single-return">
                <p>30d</p>
                <hr/>
                <p>{price_change_percentage_30d.toFixed(2)}%</p>
              </div>
              <div className="single-return">
                <p>60d</p>
                <hr/>
                <p>{price_change_percentage_60d.toFixed(2)}%</p>
              </div>
              <div className="single-return">
                <p>200d</p>
                <hr/>
                <p>{price_change_percentage_200d.toFixed(2)}%</p>
              </div>
              <div className="single-return">
                <p>1y</p>
                <hr/>
                <p>{(price_change_percentage_1y).toFixed(2)}%</p>
              </div>
              </div>
              
            </div>
            </div>
           
           
           <p className={(description.en)?("style-container discription-conatiner") :"  hidden-container"}>{ReactHtmlParser(description.en)}</p>
           

          </div>
           
        </div>
        </React.Fragment>
        );
      })}
    </div>
    
  );
};

export default Coins;
