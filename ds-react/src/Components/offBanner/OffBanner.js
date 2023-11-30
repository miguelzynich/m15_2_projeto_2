import './styles.css'
import React from 'react'

export default function OffBanner() {
  return (
    <div className='offBanner flex'>
        <div className='miniBanner'>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-11-27/2865_240x125_P5_generica_231101.gif' alt='Marcas por até 70% OFF' />
            </a>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-11-27/6270_240x125_P2_generica_231101.jpg' alt='Hering com até 65% OFF'/>
            </a>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-11-27/797_240x125_P4_generica_231101.gif' alt='Marcas por até 70% OFF'/>
            </a>
            <a href='.offBanner'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-11-27/2023_240x125_P7_generica_231101.jpg' alt='Peças Infatil 10 por 199'/>
            </a>
        </div>
        <div className='cardBanners flex'>
            <a href='.offBanner'><img src='https://static.zattini.com.br/bnn/l_zattini/2023-11-27/4858_500x390_G4_generica_231101.jpg' alt='Scarpins'/></a>
            <a href='.offBanner'><img src='https://static.zattini.com.br/bnn/l_zattini/2023-11-27/1664_500x390_G3_generica_231127.jpg' alt='Desconto Progressivo'/></a>
            <a href='.offBanner'><img src='https://static.zattini.com.br/bnn/l_zattini/2023-11-27/9160_500x390_G2_generica_231101.jpg' alt='Farm'/></a>
        </div>
    </div>
  )
}