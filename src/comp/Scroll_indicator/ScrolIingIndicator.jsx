import React, { useEffect, useState } from 'react'

const ScrolIingIndicator = () => {

    const url="https://dummyjson.com/products?limit=100";
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const [errorMessage,setErrorMessage]=useState([]);
    const [scrollPercentage,setScrollPercentage]=useState(0);
    
    async function fetchData(getUrl){
        try{

            setLoading(true);
            const res=await fetch(getUrl);
            const data=await res.json();
            console.log(data)
            setData(data);
        }catch(e){
            console.log(e);
            setErrorMessage(e.message);

        }
    }

    useEffect(()=>{
        fetchData(url)
    },[url])

  return (
    <div>
    
    <div className="top-container">
    <h1> Custom Scroll Indicaot</h1>

    </div>
    <div className="data-container">
        {
            data.length&& data >0? data.map(item=><p>{item.title} </p>) : null
        }
    </div>
      
    </div>
  )
}

export default ScrolIingIndicator
