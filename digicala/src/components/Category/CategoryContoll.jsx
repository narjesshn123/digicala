import React from 'react'
import { useState, useEffect, useRef } from 'react'
import CategoryItem from './CategoryItem'
export const CategoryContoll = () => {
    const startTimeInterval = ()=>{
        stopTimeInterval()
        slideInterval.current = setInterval(() => {
          setCurrentSlide(currentSlide => currentSlide < CategoryItem.length-1 ? currentSlide + 1 : 0)
        }, 3000)
      }
      const stopTimeInterval = ()=>{
        if(slideInterval.current){
          clearInterval(slideInterval.current)
        }
      }
      useEffect(()=>{
        startTimeInterval()
        return ()=>stopTimeInterval()
      },[])
    const[currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef()
    const prev = () =>{
        startTimeInterval()
        const index = currentSlide=>currentSlide > 0 ? currentSlide-1 : CategoryContoll.length-1
        setCurrentSlide(index)
      }
      
      const next = ()=>{
        startTimeInterval()
        const index = currentSlide=> currentSlide<CategoryContoll.length-1?currentSlide+1:0
        setCurrentSlide(index)
      }
  return (
    <div>CategoryContoll</div>
  )
}
