// create a component that changes its background color when clicked.
 import React, { useState } from 'react'
function BG (){
  const [backgroundColor,setBackgroundColor]= useState('yellow');

  const handleClick = ()=>{
    const newColor = backgroundColor === 'yellow' ? 'lightblue': 'white';
    setBackgroundColor(newColor)
  }
return (
  <div onClick={handleClick}
  style={{
    backgroundColor,
    width:'200px',
    height:'200px',
    cursor:'pointer'
  }}>
click me to change color

</div>
)
}
export default BG;