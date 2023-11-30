import React from 'react';
import Button from '../../ds/button/Button';
import './styles.css';

export default function ProductsPopular({ items }) {
  return (
    <div className='products-popular flex'>
      <h2 className='products-title'>Mais vistos</h2>
      <div className='product-cards flex'>
        {items.map((item) => (
          <div className='product-card01 flex' key={item.id}>
            <img src={item.image} alt={item.alt} />
            {item.discount && (
              <span className='product-discount'>{item.discount_amount}</span>
            )}
            <p className='product-card-title'>{item.title}</p>
            <div className='product-card-text flex'>
              {item.tax && <p className='shipping'>Frete grátis</p>}
              {item.tax && <span className='product-pretext'>A partir de</span>}
              {item.discount && (
                <span className='product-pretext strike'>{item.old_price}</span>
              )}
              <p className='product-price'>{item.price}</p>
              <p>ou 1x de {item.price}</p>
              <Button align='center' variation='primary'>
                Comprar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
