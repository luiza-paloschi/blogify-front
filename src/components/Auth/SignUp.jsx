import { useState } from 'react';
import { signupFields } from "../../constants/formFields"
import Input from "../Input";
import FormAction from '../FormAction';

export default function Signup(){
  const fields = signupFields;
  const [signupState,setSignupState]=useState({username:'', email:'', password:'', confirmPassword:''});

  const handleChange=(e)=>setSignupState({...signupState,[e.target.name]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.name]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>
    )
}