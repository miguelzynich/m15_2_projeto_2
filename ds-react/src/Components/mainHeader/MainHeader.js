import './styles.css'
import React from 'react'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { AiOutlineHeart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";



export default function MainHeader() {
  return (
    <div className='mainHeader bg-black'>
      <div className='logo'>
        <img src='https://static.zattini.com.br/2.85.6/zattini/images/logo-zattini-bn-2019.png' alt='logo'></img>
      </div>
      <div className='searchBar bg-white'>
        <input className='inputBar' type='text' placeholder='O que você procura hoje?' />
        <div className='searchButton'>
          <HiOutlineMagnifyingGlass />
        </div>
      </div>
      <div className='wishList white flex'>
        <AiOutlineHeart className='fw6 b headerIcon' />
        <span className='fw7 f6'>Lista de desejos</span>
      </div>
      <div className='headerLogin white flex'>
        <IoPersonOutline className='headerIcon' />
        <span className='fw6 b'>Entrar</span>
      </div>
      <div className='cart white'>
        <HiOutlineShoppingBag className='headerIcon' />
      </div>
    </div>
  )
}