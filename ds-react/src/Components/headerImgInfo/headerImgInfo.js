import './styles.css'
import React from 'react'
import TarjaImg from '../../images/tarja_header.png'

export default function HeaderImgInfo() {
  return (
    <div className='headerImg'>
        <span className='imgHeaderLink'>
            <img className='imgHeader' src={TarjaImg} alt="Frete grátis acima de R$ 119,99" />
        </span>
    </div>
  )
}