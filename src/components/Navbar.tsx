import React from 'react'
import { useNavigate,Route,Routes,Link} from "react-router-dom"
import icon from "../icon.png"

const Navbar = () => {
  const imageStyle = " "
  return (
    <div className='bg-white border-b'>
      <div className='flex justify-between mx-9 mt-3'>
        <div className='flex items-center w-full'>

          <img className="w-12 h-12 object-cover mr-2" src={icon} alt="" />
          <h1>Merucari</h1>
          <input className='w-1/2 bg-gray-100 border rounded-sm border-gray-300 mx-10 p-1 px-3 text-ms ' type="text" placeholder='何をお探しですか' />
        </div>
        <div className='w-1/3'>
          <ul className='flex justify-end items-center'>
            <li className='mx-3 text-sm'> <Link to={"/"}>お知らせ</Link></li>
            <li className='mx-3 text-sm'>  <Link to={"/"}>ログイン</Link></li>
            <li className='mx-3 text-sm'><Link to={"/"}>会員登録</Link></li>
            <li className='ml-2 text-sm font-bold px-4 py-2 rounded-md text-white bg-red-500  hover:bg-red-400'><Link to={"/"}>出品</Link></li>
          </ul>
        </div>
      </div>
     
      <div className='mx-10'>
        <ul className='flex items-center mx-20'>
          <li className='text-gray-500 text-sm mx-3 mt-2 px-4 py-2 font-bold hover:bg-gray-100'> <Link to={"/"}>おすすめ</Link></li>
          <li className='text-gray-500 text-sm mx-3 mt-2 px-4 py-2 font-bold hover:bg-gray-100'>  <Link to={"/"}>マイリスト</Link></li>
          <li className='text-gray-500 text-sm mx-3 mt-2 px-4 py-2 font-bold hover:bg-gray-100'><Link to={"/"}>ピックアップ</Link></li>
         
        </ul>
      </div>
    </div>
  )
}

export default Navbar