import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const WithSpinner = (WrappedComponent, getData) => {
  return ()=>{
    const [isLoding, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(undefined)

    useEffect(()=>{
        getData()
        .then(data=>setData(data))
        .catch(()=>setError(true))
        .finally(()=> setLoading(false))
    },[])

    if(isLoding){
        return (<p>...loading</p>)
    }
    if(error){
        return (<p>error</p>)
    }
    else{
         <WrappedComponent />
    }
  }
}

export default WithSpinner
