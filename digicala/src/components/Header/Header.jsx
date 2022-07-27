import React from 'react'
import './Header.style.module.css'
import logo from '../../assets/image/logo.svg';
import search from '../../assets/image/search.png';   
import { Carousel } from '../Carousel/Carousel';       
export const Header = () => {
  return (
    <div>
      <img src={logo}/>
      <input type={'search'} placeholder="جستجو" className='search-field'/>
      <button type='submit' className='search-button'>
        <img src={search} width={10}/>
      </button>
      <div>دسته بندی </div>
      <div><Carousel/></div>
    </div>
  )
}
