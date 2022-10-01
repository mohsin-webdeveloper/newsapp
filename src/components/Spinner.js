import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner=()=> {
  
        return (
            <div className="text-center">
                <img src={loading} style={{width:'100px',backgroundColor:'white'}} alt="" />
            </div>
        )
   
}
export default Spinner
