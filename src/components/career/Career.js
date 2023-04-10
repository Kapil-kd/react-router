
import { Link, useLoaderData, useNavigate } from "react-router-dom"

export default function Careers() {
  const navigate = useNavigate();
  const datas = useLoaderData()

  return (
    <div className="careers">
   
      {datas.map(career => (
        <Link  to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
          <button id="nbutton"  onClick={()=>navigate("/")}>Back to Home</button>
    </div>
  )
}

export const careersLoader = async () => {
  const res = await fetch('http://localhost:8001/datas')
 
  if (!res.ok){
    throw Error("Could not fetch the career")
  }
  return res.json()
}