import React from 'react'
import useWindowReise from './useWindowResize'

const Windowresize = () => {
    const windowSize=useWindowReise();
    const {width,height} = windowSize;
  return (
    <div>
    <h1>use Window Resize Hook</h1>
    <p>Width is {width}</p>
    <p>Heiht is {height}</p>
    </div>
  )
}

export default Windowresize
