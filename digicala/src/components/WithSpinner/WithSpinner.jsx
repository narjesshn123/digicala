// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'

// const WithSpinner = (WrappedComponent, getData) => {
//   return function WithSpinner(){
//     const {id} = useParams()
//     const [isLoding, setLoading] = useState(true)
//     const [error, setError] = useState(false)
//     const [data, setData] = useState(undefined)

//     useEffect(()=>{
//         getData(id)
//         .then(data=>{setData(data)})
//         .catch(()=>{setError(true)})
//         .finally(()=> setLoading(false))
//     },[id])

//     if(isLoding){
//         return <p>...loading</p>
//     }
//     if(error){
//         return <p>error</p>
//     }
//     else{
//        return  <WrappedComponent user={data.user}/>
//     }
//   }
// }

// export default WithSpinner
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const WithSpinner = (WrappedComponent, getData) => {
    return function WithSpinner()  {
        // return function WrappedComponent(){
        const [isLoading, setLoading] = useState(true)
        const [error, setError] = useState(false)
        const [data, setData] = useState(undefined)
        const { id } = useParams()
        useEffect(() => {
            getData(id)
                .then(data =>{
                    console.log(data);
                    setData(data)})
                .catch(() => {
                    setError(true)
                })
                .finally(() =>{setLoading(false)})
        }, [id])
        if (isLoading) {
            return (<p>...loading</p>)
        }
        if (error) {
            return <p> oh there is an error</p>
        }
        else {
            return <WrappedComponent user={data.user} />
        }
    }
    }
// }

export default WithSpinner

export const WithSpinners = (WrappedComponent, getData) => {
    return function WithSpinner()  {
        // return function WrappedComponent(){
        const [isLoading, setLoading] = useState(true)
        const [error, setError] = useState(false)
        const [data, setData] = useState(undefined)
        const { id } = useParams()
        useEffect(() => {
            getData(id)
                .then(data =>{
                    console.log(data);
                    setData(data)})
                .catch(() => {
                    setError(true)
                })
                .finally(() =>{setLoading(false)})
        }, [id])
        if (isLoading) {
            return (<p>...loading</p>)
        }
        if (error) {
            return <p> oh there is an error</p>
        }
        else {
            return <WrappedComponent product={data.product} />
        }
    }
    }