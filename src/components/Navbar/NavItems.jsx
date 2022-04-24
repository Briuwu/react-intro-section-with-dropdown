import { useState } from 'react'

import {ReactComponent as ArrowDown} from './nav-images/icon-arrow-down.svg'
import {ReactComponent as ArrowUp} from './nav-images/icon-arrow-up.svg'
import {ReactComponent as Todo} from './nav-images/icon-todo.svg'
import {ReactComponent as Calendar} from './nav-images/icon-calendar.svg'
import {ReactComponent as Planning} from './nav-images/icon-planning.svg'
import {ReactComponent as Reminders} from './nav-images/icon-reminders.svg'


export default function NavItems({menu}) {
  const [features, setFeatures] = useState(false)
  const [company, setCompany] = useState(false)

  const handleDropdown = (e) => {
    const id = e.target.id
    if ( id === 'features' ) {
      setFeatures(!features)
    } else if ( id === 'company' ) {
      setCompany(!company)
    }
  }

  return (
    <ul className={menu ? "navbar active" : "navbar"}>
      <li onClick={(e) => handleDropdown(e)} className={features ? "navbar-items features" : "navbar-items"}>
        <a id='features' href="#">Features <span>{features ? <ArrowUp /> : <ArrowDown />}</span></a>
        {features ? <div className='dropdown-features drop'>
          <div className='dropdown-features-items'><span><Todo /></span>Todo List</a></div>
          <div className='dropdown-features-items'><span><Calendar /></span>Calendar</a></div>
          <div className='dropdown-features-items'><span><Reminders /></span>Reminders</a></div>
          <div className='dropdown-features-items'><span><Planning /></span>Planning</a></div>
        </div> : ""}
      </li>

      <li onClick={(e) => handleDropdown(e)} className={company ? "navbar-items company" : "navbar-items"}>
        <a id='company' href="#">Company <span>{company ? <ArrowUp /> : <ArrowDown />}</span></a>
        {company ? <div className="dropdown-company drop">
          <div className="dropdown-company-items">History</div>
          <div className="dropdown-company-items">Our Team</div>
          <div className="dropdown-company-items">Blog</div>
        </div> : ''}
      </li>

      <li className="navbar-items"><a href="#">Careers</a></li>
      <li className="navbar-items"><a href="#">About</a></li>
    </ul>
  )
}
