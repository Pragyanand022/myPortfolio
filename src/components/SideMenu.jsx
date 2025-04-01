import React from 'react'

const SideMenu = ({isOpen, toggleMenu}) => {
  return (
    <>
      <div className={`mobile-menu event ${isOpen?"active":""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          <ul>
            <li><a className="menu_item" href="#home">Home</a></li>
            <li><a className="menu_item" href="#about">About</a></li>
            <li><a className="menu_item" href="#education">Education</a></li>
            <li><a className="menu_item" href="#skills">Skills</a></li>
            <li><a className="menu_item" href="#projects">Projects</a></li>
            <li><a className="menu_item" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideMenu