import React from 'react'
import s from './index.module.css'

export default function Main() {
  return (
    <div className={s.offer}>
        <section className='container'>
            <div className={s.content}>
                <div className={s.content_text}>
                    <h2 className={s.title}>What we offer</h2>
                    <p className={s.description}>Our workshop can carry out comprehensive bike maintenance, repair and adjustment of all components and tyre fitting work. A timely bike maintenance service helps you avoid many problems and costly repairs.  All work is carried out with quality and with passion. </p>
                </div>
                
                <div className={s.img_bicycle}>
                    <img src="./media/bicycle.svg" alt="Bicycle" />
                </div>
            </div>
        </section>
    </div>
  )
}
