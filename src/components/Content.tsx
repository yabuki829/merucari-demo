import axios, {  AxiosResponse ,AxiosError } from "axios"
import React, { useEffect, useState } from 'react'
import icon from "../images/icon.png"
// https://fakestoreapi.com/products
type product = {
  id: string;
  title: string;
  price:string;
  description:string;
  image:string;
}

const Content = () => {
  const [products,setProducts] = useState<Array<product>>([])

  useEffect(() => {
    getProduct()
  },[]);

  function getProduct(){
    axios.get("https://fakestoreapi.com/products",{
      headers: { 
        "Content-Type": "applicaiton/json",
      }
    })
    .then((res:AxiosResponse<Array<product>>) => {
      console.log(res.data)
      setProducts(res.data)
     
    })
  }

  return (

    <div className='bg-gray-100 '>  
      <div className='mx-32 pt-2 '>
        <h1 className='my-5 font-bold text-gray-500 text-xl'>おすすめの商品</h1>

        
        <div className="grid grid-cols-5">
          {
            products.map((product) => (
              <div className="my-4">
                <div className="relative">
                  <img className='h-52 w-52 object-cover mr-2 rounded-sm' src={product.image} alt="" />
                  <h1 className="absolute bottom-2 inline-block text-white bg-opacity-60 rounded-r-full px-2 py-1 bg-black">${product.price}</h1>
                </div>
                <p className=" mr-6 truncate">{product.title}</p>
              </div>
            ))
          }
        </div>
      </div>
     
    </div>
  )
}

export default Content