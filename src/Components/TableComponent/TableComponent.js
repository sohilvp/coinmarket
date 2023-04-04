import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextCrypto } from "../../CryptoContext";
import Loading from "../Loading/Loading";
import SingleCoin from "../SingleCoin/SingleCoin";
import "./tablecomponent.css";
const TableComponent = () => {
  const { currency } = useContext(ContextCrypto);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24`;
    const res = await fetch(API_URL);
    const datas = await res.json();
    setData(datas);
    console.log(datas);
    setLoading(false);
  };

    

  const filteredCoins = data.filter(coin=>
    coin.name.toLowerCase().includes(input.toLowerCase())
    )

    
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [ currency]);

  

  return (
    <div>
      <div className="ranking-text">
        <h1>CRYPTO RANKING</h1>
        <div className="search-container">
        <input
          type="text"
          className="search-field"
          placeholder="Find your coin...."
          value={input}
          onChange={ e =>{
            setInput(e.target.value)
            setPage(1)
          }}
        />
        </div> 
        
      </div>

      <div className="item-container">

        
        {loading ? (
          <Loading />
        ) : (
          filteredCoins.map((item) => {
            return (
              <Link to={`/coins/${item.id}`} key={item.id}>
                <SingleCoin data={item} />
              </Link>
            );
          })
        ).slice((page -1 )*25,(page -1 )*25+25)}
      
      
      </div>
      {!loading&&<div className="pagination">
        <button onClick={() => setPage(page - 1)} style={(page<2) ?{visibility:"hidden"}:{visibility:"visible"}} className="pg-btn">
          prev
        </button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)} className="pg-btn" style={(page>=filteredCoins?.length/25) ?{visibility:"hidden"}:{visibility:"visible"}}>
          Next
        </button>
      </div>}
    </div>
  );
};

export default TableComponent;
