import { useState } from 'react';
import { loginFields } from "../../constants/formFields";
import Input from "../Input";
import FormAction from '../FormAction';

export default function Login(){
    const fields=loginFields;
    const [loginState,setLoginState]=useState({email: '', password: ''});

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginState);
    }

    return(
        <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.name]}
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
        </div>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
    )
}