import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const apiValue = createContext();

function AllData({children}) {
    const[text,setText] = useState([])
useEffect(()=>{
    axios.get("/assets/js/api.json")
    .then((element)=>{
        setText(element.data.products)
    } )
},[])

  return (
    <apiValue.Provider value={text}>
    {children}
    </apiValue.Provider>
  )
}

export {AllData,apiValue};
