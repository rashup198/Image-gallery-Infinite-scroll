import "./App.css";
import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import Image from "./components/Image";
import axios from "axios";



function App() {
  const [images, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(async () => {
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
        );

        setImage((prev) => {
            return [...prev, ...response.data];
            setLoading(false);
        });
       
    }, 1500);
}, [page]);

  const handleScroll = () => {
    console.log("heigth:",document.documentElement.scrollHeight);
    console.log("top: ",document.documentElement.scrollTop);
    console.log("Window: ",window.innerHeight);
    if(window.innerHeight + document.documentElement.scrollTop +1>= document.documentElement.scrollHeight) {
      setLoading(true);
      setPage((prev) => prev + 1);
    };
  }


  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return()=>{window.removeEventListener('scroll',handleScroll)

    }
  },[])

 
  return (
  <div >
    <Heading></Heading>
    
    <Image images={images}>  
    </Image>
    {loading && <Loader></Loader>
    }
    
  </div>
  );
}

export default App;
