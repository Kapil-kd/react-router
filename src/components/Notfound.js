import React from 'react'
import { Link} from 'react-router-dom'

export const Notfound = () => {
  return (
    <div className='notfound'>
      <h2>Page not found</h2>
      <p>Fusce vel elit semper, gravida metus sed, mollis nibh. Proin eleifend massa luctus, placerat velit non, efficitur nisi. Proin rhoncus dolor semper turpis pretium auctor. Aenean convallis arcu ipsum, sit amet efficitur eros tristique ac. Aenean pretium tempor felis. Pellentesque dui elit, dignissim nec metus porta, luctus dictum nulla. Donec vel massa nec neque commodo vulputate id quis urna. </p>
    <p>Go to <Link to="/">Homepage</Link></p>
    </div>
  )
}
