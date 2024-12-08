import React, { useRef } from 'react'
import useFetch from '../useFetch/useFetch';

const ScrollTopbottom = () => {
//fetching a list of 100 products from the URL https://dummyjson.com/products?limit=100 and using useFetch to handle the request. It destructures the result into three variables:

// data to hold the fetched data (product details),
// error to capture any errors,
// pending to track if the request is still in progress.
    const {data,error,pending}=useFetch(
        "https://dummyjson.com/products?limit=100",{}
        //{}: This is an empty object, likely intended for additional options to configure the fetch request, such as headers, request method, etc. In this case, no specific configuration is provided.

    )

    const bottomRef=useRef(null);

    function handleScrollToTop(){
        window.scrollTo({
            top:0,
            lef:0,
            behavior:'smooth'
        });
    }

    function handleBottom() {
        bottomRef.current.scrollIntoView({behavior:"smooth"});
    }

    if(error){
        return <h1>Error Occurd ,Please Try again Later...</h1>
    }
  return (
    <div>
    <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleBottom}>Scroll To Bottom</button>
      <ul style={{listStyle:'-moz-initial'}}>
        {
            data && data.products && data.products.length?data.products.
            map((item)=><li>{item.title}</li>):<h2>Loading Please Wait</h2>
        }
      </ul>



      <button onClick={handleScrollToTop}>GO to Top</button>
<div ref={bottomRef}></div>
<h3>This is the bottom of the page</h3>
      
    </div>
  )
}

export default ScrollTopbottom
