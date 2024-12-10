import React, { useRef, useState } from 'react'
import useOutsideClick from './useOutsideClick';
import "./Style.css";


const UseOutside = () => {
    const [showContent,setShowContent]=useState(false);
    const ref=useRef();
    useOutsideClick(ref,()=>setShowContent(false));
  return (
    
  <>
    <center>
    <div className='container-box'>
    {
        showContent ? (<div ref={ref}>
        <h1>This is a random content</h1>
        <p>Please click outside of this to close</p>
        
        </div>):(<button onClick={()=>setShowContent(true)}>Show Content</button>)
      }
    </div>
    </center>
  </>
  
  )
}

export default UseOutside
