import React from 'react'

import Button from './Button'
import DoubleSlider from './DoudleSlider'
import SocialVK from './social/SocialVK';
import SocialInsta from './social/SocialInsta';

function FirstScreen({ topBuns }) {

  return (
    <div className="firstScr">
      <div className="firstScr_text">
        <h1>Мягкие булочки <br /> с доставкой на дом</h1>
        <div className="descr">Закажи прямо сейчас и наслаждайся нежным вкусом уже через 30 минут!</div>
        <Button>Оформить заказ</Button>
        <DoubleSlider topBuns={topBuns} />
      </div>
      <div className='socials'>
        <SocialVK />
        <SocialInsta />
      </div>
    </div>
  )
}

export default FirstScreen