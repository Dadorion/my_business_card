import React from 'react'

import s from './Screen_III.module.scss'

import mailIcon from '../../assets/icons/Email.svg'
import gitIcon from '../../assets/icons/GithubLogo.svg'
import phoneIcon from '../../assets/icons/Phone.svg'
import telegramIcon from '../../assets/icons/Telegram.svg'

export default function ScreenIII() {
  return (
    <div className={s.Screen_III} id='contacts'>
      <div className={s.contacts_block}>
        <h3>На связи</h3>
        <div>
          <img src={phoneIcon} alt='phoneIcon' />
          <a href='tel:+79003539939'>+7 900 353 99 39</a>
        </div>
        <div>
          <img src={telegramIcon} alt='telegramIcon' />
          <a href='https://t.me/anton_babenko'>@anton_babenko</a>
        </div>
        <div>
          <img src={gitIcon} alt='gitIcon' />
          <a href='https://github.com/Dadorion'>https://github.com/Dadorion</a>
        </div>
        <div>
          <img src={mailIcon} alt='mailIcon' />
          <a href='mailto:anton.notes88@gmail.com'>anton.notes88@gmail.com</a>
        </div>
      </div>
      <div className={s.authors_block}>
        <p>2024. UI/UX Илона Ковза. Вёрстка Антон Бабенко. Icons by Icon8 and Phosphor </p>
      </div>
    </div>
  )
}
