import React from 'react'
import Basket from './Basket'
import Logo from './Logo'
import MainMenu from './MainMenu'

function Header() {
  return (
    <header>
        <Logo/> 
        <MainMenu items={['Главная', "Меню", "Рестораны", "Доставка"]}/>
        <Basket/>
        <a href='tel:+79998887766'>+7 (999) 888-77-66</a>
    </header>
  )
}

export default Header