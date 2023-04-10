import { Link, useLocation } from "react-router-dom"


export const Breadcrumbs = () => {

    const location = useLocation();

    let currentlink = "";

    const res = location.pathname.split("/") 
    .filter(crumb => crumb !== "") 
     .map(crumb => {
        currentlink += `/${crumb}`
        return(
            <div className="crumb" key={crumb}>
                <Link to={currentlink}>{crumb}</Link>
            </div>
        )
     })
  
      

  return (
    <div className="breadcrumbs"> 
        <h4>{res}</h4>
    </div>
  )
}
