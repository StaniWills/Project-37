import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    <footer className={['wrapper', s.footer].join(' ')}>
      <p>2023 (с) Все права защищены. БухОне.ру</p>
      <p>Разработано: BuhOne</p>
    </footer>
  )
}