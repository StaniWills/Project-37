import React from 'react'
import logo from './media/logo.png'
import s from './index.module.css'
import { MenuOutlined } from '@ant-design/icons'

export default function Nav({ menuActive, setMenuActive }) {

  return (
    <nav className={['wrapper', s.nav_block].join(' ')}>
      <a href='/#'>
        <img src={logo} alt="logo" />
      </a>

      <ul className={[ s.nav_menu, menuActive ? s.active : '' ].join(' ')}>
        <li>Главная</li>
        <li>Услуги</li>
        <li>Кейсы</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ul>

      <MenuOutlined className={s.menu_icon} onClick={() => setMenuActive(menuActive ? false : true)} />
    </nav>
  )
}