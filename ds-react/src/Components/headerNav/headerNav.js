import './styles.css'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HeaderNav() {
  return (
    <div className='headerNav flex'>
        <div className='location flex'>
            <CiLocationOn className='locationIcon b'/>
            <p className='locationText gray'>Informe seu CEP</p>
        </div>
        <div className='categories flex'>
            <div className='categoriesActive flex'>
            </div>
                <RxHamburgerMenu className='categoriesIcon black' />
                <p className='pointer b black'>Todas as categorias</p>
            <p className='categoriesText pointer'>Feminino</p>
            <p className='categoriesText pointer'>Masculino</p>
            <p className='categoriesText pointer'>Infantil</p>
            <p className='categoriesText pointer'>Beleza</p>
            <p className='categoriesText pointer'>Outlet</p>
        </div>
    </div>
  )
}