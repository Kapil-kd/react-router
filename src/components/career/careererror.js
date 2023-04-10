import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export const Careererror = () => {
    const error = useRouteError();
  return (
    <div className='error'>
        <h2>Error</h2>
      <h2>{error.message}</h2>
      <Link to="/">Go to Home Page</Link>
    </div>
  )
}


