import axios, {  AxiosResponse ,AxiosError } from "axios"
import React, { useEffect, useState } from 'react'
import icon from "../images/icon.png"
// https://fakestoreapi.com/products

// {
//   "id": 2,
//   "title": "Mens Casual Premium Slim Fit T-Shirts ",
//   "price": 22.3,
//   "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//   "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",

//   },
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
              <div className="my-2">
                <div>
                  <img className='h-52 w-52 object-cover mr-2' src={product.image} alt="" />
                  <h1 className="">{product.price}</h1>
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