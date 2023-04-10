import React from "react";
import { Form, redirect, useActionData, useFormAction } from "react-router-dom";

export const Contact = () => {
 const data = useActionData()

  return (
    <div className="contact">

      <Form action="/help/contact" method="post">
        <label htmlFor="fullname">Full Name</label>
        <input name="fullname" type="text" placeholder="Full name"  />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="Email"  />
        <label htmlFor="message">Message</label>
        <textarea className="textarea" name="message" ></textarea>
        {data && data.error && <div className="err">{data.error}</div> }
        <input id="button" type="submit" value="Submit"/>

      </Form>
    </div>
  );
};

export const submit = async({request})=>{
  //  console.log(request)
  const res =await request.formData();
  // console.log(res);

  const submission = {
    fullname : res.get("fullname"),
    email:res.get("email"),
    message : res.get("message")
  }
  // console.log(submission);

  if(submission.message.length < 10){
     return {error : "Message must be over 10 chars"}
  }
  if(submission.fullname.length < 1){
    return {error : "Name field is required"}
 }
 if(submission.email.length < 1){
  return {error : "Mail field is required "}
}
  return redirect("/")
}