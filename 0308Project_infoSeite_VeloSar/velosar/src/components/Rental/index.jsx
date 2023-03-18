import React from 'react'
import s from './index.module.css'

export default function Rental() {

  return (

    <div className={s.rental}>
        <section className='container'>
            <div className={s.block_container}>
                <img src="./media/bicesRental.svg" alt="Bices Pic"/>
                <div className={s.content_text}>
                    <div className={s.block_item1}>
                        <p>Bicycle rental</p>
                    </div>
                    <div  className={s.block_item2}>
                        <p className={s.text}>You can rent well-maintained and tuned bikes from us. We are located in a beautiful park!</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

  )
}
