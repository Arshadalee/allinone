import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import "./Style.css";

const QrCode = () => {
    const [qrCode,setQrCode]=useState("");
    const [input,setInout]=useState('');

    function handleQrCode(){
        setQrCode(input);

    }
  return (
    <div>
    <center>  <input
    onChange={(e)=>
        setInout(e.target.value)}
     type="text" name="qr-code" placeholder="enter your value here"/>

        <button disabled={input && input.trim() !==" "?false:true}
        onClick={handleQrCode}>Generate</button>
  
      <div>
        <QRCode id="rq-code-value" value={qrCode} size={400}
        bgColor="#fff"/>
      </div></center>
  
    </div>
  )
}

export default QrCode
