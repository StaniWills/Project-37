import React from 'react'
import s from './index.module.css' 

export default function Content() {
  return (
    <div className={s.main}>
        <div className={s.container}>
          <form className={s.form}>
            <input type='date'>
            </input>
          </form>
        </div>
    </div>
  )
}
