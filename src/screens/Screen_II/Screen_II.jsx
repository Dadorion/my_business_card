import React from 'react'

import s from './Screen_II.module.scss'

import reactIcon from '../../assets/icons/Atom.svg'
import balanceIcon from '../../assets/icons/Balance.svg'
import brainIcon from '../../assets/icons/Brain.svg'
import expressIcon from '../../assets/icons/Coffee.svg'
import bdIcon from '../../assets/icons/Database.svg'
import earIcon from '../../assets/icons/Ear.svg'
import jsIcon from '../../assets/icons/FileJs.svg'
import gearIcon from '../../assets/icons/Gear.svg'
import branchIcon from '../../assets/icons/GitBranch.svg'
import gitIcon from '../../assets/icons/GithubLogo.svg'
import kanbanIcon from '../../assets/icons/Kanban.svg'
import sqlIcon from '../../assets/icons/Sql.svg'
import usersIcon from '../../assets/icons/Users.svg'
import expressLogo from '../../assets/images/Express Js.png'
import gitLogo from '../../assets/images/GitHub.png'
import mongoLogo from '../../assets/images/MongoDB.png'
import mysqlLogo from '../../assets/images/MySQL Logo.png'
import nodeLogo from '../../assets/images/Node Js.png'
import postgresLogo from '../../assets/images/PostgreSQL.png'
import reactLogo from '../../assets/images/React.png'
import reduxLogo from '../../assets/images/Redux.png'

export default function ScreenII() {
  return (
    <div className={s.Screen_II}>
      <div className={s.logos_block}>
        <div className={s.logos}>
          <img src={nodeLogo} alt='nodeLogo' />
          <img src={expressLogo} alt='expressLogo' />
          <img src={postgresLogo} alt='postgresLogo' />
          <img src={mongoLogo} alt='mongoLogo' />
          <img src={mysqlLogo} alt='mysqlLogo' />
          <img src={reactLogo} alt='reactLogo' />
          <img src={reduxLogo} alt='reduxLogo' />
          <img src={gitLogo} alt='gitLogo' />
        </div>
      </div>
      <div className={s.skills_block} id='skills'>
        <div className={s.skills}>
          <h2>Hard_skills</h2>
          <ul>
            <li>
              <img src={jsIcon} alt='' />
              <p>JavaScript</p>
            </li>
            <li>
              <img src={bdIcon} alt='' />
              <p>проектирование архитектуры баз данных</p>
            </li>
            <li>
              <img src={sqlIcon} alt='' />
              <p>PostgreSQL, MongoDB, MySQL</p>
            </li>
            <li>
              <img src={expressIcon} alt='' />
              <p>Express</p>
            </li>
            <li>
              <img src={reactIcon} alt='' />
              <p>React, Redux</p>
            </li>
            <li>
              <img src={gitIcon} alt='' />
              <p>GitHub</p>
            </li>
            <li>
              <img src={kanbanIcon} alt='' />
              <p>Agile, Scrum, Kanban</p>
            </li>
          </ul>
        </div>
        <div className={s.skills}>
          <h2>Soft_skills</h2>
          <ul>
            <li>
              <img src={brainIcon} alt='' />
              <p>быстро обучаюсь</p>
            </li>
            <li>
              <img src={gearIcon} alt='' />
              <p>мыслю системно</p>
            </li>
            <li>
              <img src={branchIcon} alt='' />
              <p>оптимизирую процессы</p>
            </li>
            <li>
              <img src={earIcon} alt='' />
              <p>адекватно воспринимаю критику</p>
            </li>
            <li>
              <img src={usersIcon} alt='' />
              <p>имею опыт организационной работы</p>
            </li>
            <li>
              <img src={balanceIcon} alt='' />
              <p>эмоционально уравновешен</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
