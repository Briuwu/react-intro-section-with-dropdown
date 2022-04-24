import { useState } from 'react'

import NavItems from './NavItems'
import Buttons from './Buttons'

import {ReactComponent as OpenMenu} from './nav-images/icon-menu.svg'
import {ReactComponent as CloseMenu} from './nav-images/icon-close-menu.svg'
import {ReactComponent as Logo} from './nav-images/logo.svg'

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => setMenu(!menu)
  

  return (
    <header className="header">
      <div className="header_logo"><a href="#"><Logo /></a></div>
      <div className="header_menu" onClick={handleMenu}>
        {menu ? <CloseMenu /> : <OpenMenu />}
      </div>
      <nav>
        <NavItems menu={menu} />
      </nav>
      <Buttons />
    </header>
  )
}