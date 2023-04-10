import React from 'react'
import { Outlet } from 'react-router-dom'

export const Careerlayout = () => {
  return (
    <>
    <div className='clayout'>
       <h2>Career Loader</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem accumsan, faucibus mauris a, aliquet tellus. Quisque congue, risus eget bibendum finibus, justo lacus vestibulum nunc, id facilisis mauris dolor at tortor. Phasellus bibendum imperdiet eros at scelerisque.</p>
        <Outlet/>
    </div>
    </>
  )
}
