import React from 'react'
import s from './index.module.css'

export default function Header() {
  return (

    <header className={s.header}>
        <section className='container'>

            <nav className={s.nav}>
                <div className={s.logo}>
                    <img src="./media/logo.svg" alt="logo" />
                </div>

                <menu className={s.menu}>
                    <a href='#'>About Us</a>
                    <a href='#'>Services</a>
                    <a href='#'>Rent</a>
                </menu>

                <button className={s.button}>
                Connect
                </button>
            </nav>

            <div className={s.content}>
                <div className={s.content_text}>
                    <h1 className={s.title}>Bicycle workshop "Velozar"</h1>
                    <p className={s.description}> We, the craftsmen at Velozar bike workshop, are the lucky ones who have been able to turn their hobby into a profession. We love to ride ourselves and want your two-wheeled friend to bring you only joy and pleasure from riding.
                    </p>
                </div>

                <div className={s.img_dino}>
                    <img src="./media/dino.svg" alt="Dino" />
                </div>
            </div>
        </section>
    </header>
  )
}
