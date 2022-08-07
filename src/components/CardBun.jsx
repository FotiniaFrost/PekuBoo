import React from 'react'
import Button from './Button'

function CardBun({ img, name, desc, price }) {

    return (
        <div className='cardBun'>
            <div className='cardBun_img'>
                <img src={img} alt={name} />
                <div className='cardBun_name'>{name}</div>

            </div>
            <div className='cardBun_img__decor'></div>
            <div className='cardBun_about'>
                <div className='cardBun_describe'>
                    <span>Описание:</span>
                    <p>{desc}</p>
                </div>
                <div className='cardBun_order'>
                    <Button> В корзину </Button>
                    <div className='order_nums'>
                        <div className="cardBun_amount">
                            <Button circle>-</Button>
                            <span> 0 </span>
                            <Button circle>+</Button>
                        </div>
                        <div className="cardBun_price">{price} &#8381;</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardBun