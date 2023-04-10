import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Helplayout = () => {
  return (
    <div className='help-layout'>

        <div>
            <h2>Website help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem accumsan, faucibus mauris a, aliquet tellus. Quisque congue, risus eget bibendum finibus, justo lacus vestibulum nunc, id facilisis mauris dolor at tortor. Phasellus bibendum imperdiet eros at scelerisque. Aliquam luctus finibus dolor ut lobortis. Etiam dictum dui vel orci accumsan cursus.</p>
        </div>
        <nav>
            <NavLink to="faq">To Know FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
