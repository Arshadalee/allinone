import React, { useRef } from 'react'

const ScrolltoSection = () => {
const ref=useRef();
    const data = [
        {
          label: "First Card",
          style: {
            width: "100%",
            height: "600px",
            background: "red",
          },
        },
        {
          label: "Second Card",
          style: {
            width: "100%",
            height: "600px",
            background: "grey",
          },
        },
        {
          label: "Third Card",
          style: {
            width: "100%",
            height: "600px",
            background: "blue",
          },
        },
        {
          label: "Fourth Card",
          style: {
            width: "100%",
            height: "600px",
            background: "green",
          },
        },
        {
          label: "Fifth Card",
          style: {
            width: "100%",
            height: "600px",
            background: "orange",
          },
        },
      ];

      function handleClick(){
        let pos = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior:"smooth"
        });
      }

  return (
    <div>
    <h2>Scroll to a perticular Section</h2>
    <button onClick={handleClick}>Click to Scroll</button>
    {
        data.map((item,index)=>(
            <div ref={index===3 ? ref:null} style={item.style}>
               <h3>{item.label}</h3> 
            </div>
        ))
    }
      
    </div>
  )
}

export default ScrolltoSection
