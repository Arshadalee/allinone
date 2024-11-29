import React, { useState } from 'react'

const Poptest = () => {

    const [popup,setPopup]=useState(false);

    function handlepop(){
       setPopup(!popup);
    }

  return (
   <center>
     <div>
    
    <button onClick={handlepop}>pop up</button>
    {
        popup && <Poptest/>
    }


</div>
   </center>
  )
}

export default Poptest
