import React from 'react'

import s from './Screen_I.module.scss'

import exitIcon from '../../assets/icons/Close.svg'
import mailIcon from '../../assets/icons/Email.svg'
import gitIcon from '../../assets/icons/GithubLogo.svg'
import menuIcon from '../../assets/icons/Menu.svg'
import phoneIcon from '../../assets/icons/Phone.svg'
import telegramIcon from '../../assets/icons/Telegram.svg'
import telegramDarkIcon from '../../assets/icons/Telegram_dark.svg'
import photo from '../../assets/images/Антон_ai_clean_colored 1.png'
export default function ScreenI() {
  const [isShowNav, setIsShowNav] = React.useState(false)
  const [navClass, setNavClass] = React.useState(s.nav)

  const handleShowNav = () => {
    isShowNav ? setNavClass(s.nav_active) : setNavClass(s.nav)

    setIsShowNav(!isShowNav)
  }

  return (
    <div className={s.Screen_I} id='#info'>
      <header>
        <nav className={navClass}>
          <div className={s.burger} onClick={handleShowNav}>
            <img src={menuIcon} alt='menuIcon' />
          </div>
          <div className={s.exit} onClick={handleShowNav}>
            <img src={exitIcon} alt='exitIcon' />
          </div>
          <ul className={s.ul_nav}>
            <li>
              <a href='#info'>Инфо</a>
            </li>
            <li>
              <a href='#skills'>Скилы</a>
            </li>
            <li>
              <a href='#contacts'>Контакты</a>
            </li>
          </ul>
          <ul className={s.contacts}>
            <li>
              <img src={phoneIcon} alt='phoneIcon' />
            </li>
            <li>
              <a href='https://t.me/anton_babenko'>
                <img src={telegramIcon} alt='telegramIcon' />
              </a>
            </li>
            <li>
              <a href='https://github.com/Dadorion'>
                <img src={gitIcon} alt='gitIcon' />
              </a>
            </li>
            <li>
              <img src={mailIcon} alt='mailIcon' />
            </li>
          </ul>
        </nav>
      </header>
      <div className={s.title_block}>
        <h3 className={s.subtitle}>Node.js</h3>
        <h1 className={s.title_one}>Backend</h1>
        <h2 className={s.title_two}>разработчик</h2>
        <h3 className={s.subtitle}>Антон Бабенко</h3>
        <div className={s.button}>
          <a href='https://t.me/anton_babenko'>
            <img src={telegramDarkIcon} alt='telegramDarkIcon' />
            <p>Связаться</p>
          </a>
        </div>
      </div>
      <div className={s.photo_box}>
        <img src={photo} alt='фото' />
      </div>
    </div>
  )
}
