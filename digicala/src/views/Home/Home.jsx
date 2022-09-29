import React from 'react'
import { useState, useEffect } from 'react';
import './HomeStyle.css'; 
import oil from '../../assets/image/oil.jpg'           
import { Carousel } from '../../components/Carousel/Carousel';    
import { CategoryOtherItem } from '../../components/CategoryOtherItem/CategoryOtherItem';
import { CategoryAmazing } from '../../components/CategoryAmazing/CategoryAmazing';
import Container from '../../components/Container/Container';
import GroupCategory from '../../components/CategoryOtherItem/GroupCategory';
import ProposalProduct from '../../components/ProposalProduct/ProposalProduct';
import { Navbar } from '../../components/Nav/Navbar';
import Categories from '../../components/Category/Categories';
import axios from 'axios';
import { getProducts } from '../../api/Products.api';
import UncontrolledExample from '../../components/Carousel/Carousel'
// import { useParams } from 'react-router-dom';
export const Home = () => {
  // let {id} = useParams()
  const[users, setUsers]= useState([])
  useEffect(()=>{
    getProducts().then(res => setUsers(res.data.users)).catch(e=>alert(e.status))
    // axios.get('/api/users')
    // .then(res=>setUsers(res.data.users))
    // .catch(e=>{console.log(e)})

    //   fetch("/api/users")
    //   .then(res=>res.json())
    //   .then(data=>setUsers(data.users))
    //   .then(data=>console.log(data.users))
  },[])
  return (
 
            <div>
            {/* <div><Navbar/></div> */}
            <UncontrolledExample/>
{/*          
            <section><CategoryOtherItem/></section>
          
            <section><CategoryAmazing/></section>
           
            <section><GroupCategory/></section>  
            <section>
            <Categories users={users} id={users.id} />
            </section>
            <section><ProposalProduct/></section>  

          
                  
                <img src= {oil} width={1100}/> */}
            </div>
       

  
  )
}
