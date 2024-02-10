import React from 'react';
import './Retailer.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Retailers() {
  const [products ,setProduct] = useState([]);
  const[search,setSearch]= useState('');


  const loadProducts = async () =>{

    const response= await axios.get('/products')
    setProduct(response?.data?.data)
  }

  useEffect(()=>{
    loadProducts()

  },[])

  const searchProduct = async() =>{

    const response =await axios.get(`/product/search?q=${search}`)
    setProduct(response?.data?.data)

  }

  useEffect(()=>{

    searchProduct()

  },[search])
  return (
    <div>
        <Navbar/>

        <input type="text" value={search} className='mt-3 searchbar'placeholder='Search Product' onChange={(e)=>{
          setSearch(e.target.value)
          
        }}/>
        <div className='products-cards'>
       {

        products?.map((product,i)=>{
          const {_id, name, price, productImg, description }=product
          return(
            <ProductCard
             key={i} 
             name={name} 
             price={price} 
              productImg={productImg} 
              description={description}
              _id = { _id }/>
          )

        })

       }
       </div> 
       <Footer/>
    </div>
  )
}

export default Retailers;
