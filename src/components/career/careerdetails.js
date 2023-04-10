import React from 'react'
import {useLoaderData,  useParams } from 'react-router-dom'

export const Careerdetails = () => {
   
const {id} = useParams();
const loaders = useLoaderData();
  return (
    <div className='cdetails'>
       <h2>Careers Details For  {loaders.title}</h2>
       <p>Starting Salary :  {loaders.salary}</p>
       <p>Location :  {loaders.location}</p>
       <div className='details'>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem leo, interdum vitae nulla ac, luctus pretium quam. Morbi vel nunc viverra, gravida libero in, auctor nulla. Curabitur et nunc lorem. Morbi eget odio tincidunt, consequat nibh at, dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam gravida elementum felis, ac vulputate velit feugiat quis.</p>
       </div>
  
    </div>
  )
}


export const careerdetails =async({params})=>{
  const {id} = params
    const res = await fetch("http://localhost:8001/datas/" +id);

    if(!res.ok){
        throw Error("Could not show the careers")
    }
    return res.json();
}