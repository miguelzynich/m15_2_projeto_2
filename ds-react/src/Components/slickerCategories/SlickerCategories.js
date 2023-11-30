import './styles.css'
import React from 'react'
import Slider from 'react-slick';
import { GrNext, GrPrevious } from "react-icons/gr";

function CustomNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='customNextArrow'
        style={{ ...style, display: "block"}}
        onClick={onClick}>
            <GrNext />
        </div>
    );
  }
  
  function CustomPrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='customPrevArrow'
        style={{ ...style, display: "block"}}
        onClick={onClick}>
            <GrPrevious />
        </div>
    );
  }

export default class SlickerCategories extends React.Component {
    render() {
      var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
      };

    return (
        <div className='slickerCategories'>
            <h3>CONFIRA TAMBÉM:</h3>
            <Slider {...settings}>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/260_160x160_cat1.png' alt='Sandálias'></img>
                <p className='cardOptionText'>Sandálias</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/292_160x160_cat2.png' alt='Vestidos'></img>
                <p className='cardOptionText'>Vestidos</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/1157_160x160_cat3.png' alt='Tênis femininos'></img>
                <p className='cardOptionText'>Tênis femininos</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/9007_160x160_cat4.png' alt='Bolsas'></img>
                <p className='cardOptionText'>Bolsas</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/2531_160x160_cat5.png' alt='Scarpins'></img>
                <p className='cardOptionText'>Scarpins</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/8115_160x160_cat7.png' alt='Sapatilhas'></img>
                <p className='cardOptionText'>Sapatilhas</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/5613_160x160_cat6.png' alt='Calças jeans'></img>
                <p className='cardOptionText'>Calças jeans</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/4626_160x160_cat15.png' alt='Perfumes'></img>
                <p className='cardOptionText'>Perfumes</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/9369_160x160_cat16.png' alt='Mocassins'></img>
                <p className='cardOptionText'>Mocassins</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/6611_160x160_cat17.png' alt='Jaquetas e casacos'></img>
                <p className='cardOptionText'>Jaquetas e casacos</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/8527_160x160_cat18.png' alt='Botas'></img>
                <p className='cardOptionText'>Botas</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/2051_160x160_cat19.png' alt='Lingerie'></img>
                <p className='cardOptionText'>Lingerie</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/6580_160x160_cat20.png' alt='Underwear'></img>
                <p className='cardOptionText'>Underwear</p>
            </div>
            <div className='cardOption'>
                <img src='https://static.zattini.com.br/bnn/l_zattini/2023-08-31/3911_160x160_cat21.png' alt='Calçados infantis'></img>
                <p className='cardOptionText'>Calçados infantis</p>
            </div>
            </Slider>
      </div>
    )
    }
}