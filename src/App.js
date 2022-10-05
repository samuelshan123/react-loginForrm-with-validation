import React from "react";
import "./style.css";
import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function App() {

  const[form,setForm]=useState({})
  const[errors,setErrors]=useState({})
  const setField= (field,value)=>{
    setForm({
      ...form,
      [field]:value

    })

    if(errors[field]){
    setErrors({
      ...errors,
      [field]:null
    })
    }
  }

  function validateForm(){
    const {email,password}=form
  const newErrors={}
    if(!email){
       newErrors.email="Email should not be empty"
    }
     if(!password){
      newErrors.password="password cannot be empty"
    }
    else if(password.length<6){
      newErrors.password="password should be 6 digit length"

    }
    return newErrors
  }

  function submit(event){
    event.preventDefault()
    const formErrors =validateForm()

    if(Object.keys(formErrors).length>0){
      setErrors(formErrors)
      console.log("sub")
    }
    else{
      console.log("form submited")
      console.log(form)
    }

  }
  return (
    <div className="form_container">
      <h1>Hello React Forms!</h1>
      <p>Start editing to see some magic happen :)</p>
      
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setField('email',e.target.value)} isInvalid={errors.email}/>
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setField('password',e.target.value)} isInvalid={errors.password}/>
        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback> 
        </Form.Group>
      <Button variant="primary" onClick={submit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}