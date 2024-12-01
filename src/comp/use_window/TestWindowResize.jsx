import useWindowSize from "./useWindowSize";

import React from 'react'

const TestWindowResize = () => {

    const winSize=useWindowSize();
    const {width, height} = winSize;

  return (
    <div>
  <h1>Use Window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
      
    </div>
  )
}

export default TestWindowResize
