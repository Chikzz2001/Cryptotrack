import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Coin from './components/coin';

function App() {
  //the coins array store the data fetched from the API the setCoins method performs the storing operation
const [coins,setCoins]=useState([]);
//the search variable stores the name of the crypto which the user enters
const [search,setSearch]=useState('')

//we use the useEffect hook to render the elements from the below API we use axios here...we use promises to get the responses(res) when we fetch the data from the API and the set data into the coins array
//we also use the catch method to alert the user if any error occurs during the API call we then display the below msg 
useEffect(() => {
axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
.then(res => {
  setCoins(res.data)
  console.log(res.data)
})
.catch(err=>alert("Ooppss!! something went wrong!!"))
},[])

//this function is called when the input value in the search box changes within this function the value is stored in search variable using setSearch function
const handleChange = e =>{
  setSearch(e.target.value)
}

//we store the so-far matched objects in filteredCoins with the value stored in search by filtering them from the data in coins 
const filteredCoins=coins.filter(coin=>

  //we match the name property of the object ignoring case
  //we do not use the equal operator as we do not want the exact match but any name in coins that have a substring  as in search
  coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app">
     <div className="coin-search">
       <h1 className="coin-text">
         Get realtime updates on any crypto-currency
       </h1>
       <form className="center">
       <input type="text" placeholder="search here" className="coin-input" onChange={handleChange}></input>
       </form>
     </div>
     {
       filteredCoins.map(coin =>{
         return (
           //we return the coin component with the following props passed
         <Coin 
         key={coin.id} 
         name={coin.name} 
         image={coin.image} 
         symbol={coin.symbol}
         marketcap={coin.market_cap}
         price={coin.current_price}
         priceChange={coin.price_change_percentage_24h}
         volume={coin.total_volume}/>
         
         )
       })
     }
    </div>
  )
}

export default App;
