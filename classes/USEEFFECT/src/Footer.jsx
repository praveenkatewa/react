import React from 'react';
import Xyz from './Xyz';


function Footer(props) {
  return (
  <><h1>this is my footer {props.val}</h1>
     <Xyz val = {props.val} />
      </>
      
   
  )
}

export default Footer
