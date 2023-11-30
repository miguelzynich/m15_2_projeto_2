import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './styles.css'
import React from 'react'
import slide01 from '../../images/slide01.png'
import slide02 from '../../images/slide02.png'
import slide03 from '../../images/slide03.png'
import slide04 from '../../images/slide04.png'

const SlickerSlides = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };

    return (
        <div className="slicker-slides">
            <Slider {...settings}>
            <div>
                <img src={slide01} alt="desconto até 70% em compras à vista"></img>
            </div>
            <div>
            <img src={slide02} alt="sandálias e rasteiras a partir de R$ 39,99"></img>
            </div>
            <div>
            <img src={slide03} alt="dia das crianças desconto na compra de 2, 3 e 4 itens"></img>
            </div>
            <div>
            <img src={slide04} alt="leve 3 e pague 2"></img>
            </div>
            </Slider>
      </div>
    )
}

export default SlickerSlides