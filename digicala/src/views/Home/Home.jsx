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
import { getusers } from '../../api/Products.api';
import UncontrolledExample from '../../components/Carousel/Carousel'
// import { useParams } from 'react-router-dom';
export const Home = ({filter, setFilter}) => {
  // let {id} = useParams()
  const[users, setUsers]= useState([])
  const[products, setProducts] = useState([])
 
  useEffect(()=>{
    getusers().then(res => setProducts(res.data.products))
    .then(res => console.log(res.data.products))
  
    .catch(e=>console.log(e.status))
  },[])
  useEffect(()=>{
    getProducts().then(res => setUsers(res.data.users))
  
    .catch(e=>console.log(e.status))
  },[])
  return (
 
            <div>
            {/* <div><Navbar/></div> */}
            <UncontrolledExample/>
            <section>
              <GroupCategory/>
            </section> 
            <section>
              <CategoryAmazing filter={filter} setFilter={setFilter} products={products} id={products.id} />
            </section> 
            <section style={{marginTop:"5rem"}}>
              <Categories filter={filter} setFilter={setFilter} users={users} id={users.id} />
            </section>
            
            {/* <section><ProposalProduct/></section>  */}
{/*          
            <section><CategoryOtherItem/></section>
          
          
           
            

          
                  
                <img src= {oil} width={1100}/> */}
            </div>
       

  
  )
}
