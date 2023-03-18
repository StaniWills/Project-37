import React from 'react'
import s from './index.module.css'

export default function Services() {
  return (

    <div className={s.services}>
        <section className='container'>
            <div className={s.block_container}>
                <div className={s.block_item1}>
                    <p className={s.text}>Annual maintenance</p>
                </div>
                <div  className={s.block_item2}>
                    <p className={s.text}>Alignment wheels</p>
                </div>
                <div  className={s.block_item3}>
                    <p className={s.text}>Setting switches</p>
                </div>
            </div>
        </section>
    </div>

  )
}
