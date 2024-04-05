import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className='header'>
        <div className='headerList'>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
                
            </div>
        </div>
    </div>
  )
}
