import { useState } from 'react';
import styled from 'styled-components';
import './form.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function WriteForm(){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('Write your text here...');

    async function handleSubmit(e){
        e.preventDefault();
        const body = {title: title, content: value};
        console.log(body);
    }

    return (
        <>
        <div class="col-3">
            <input class="effect-1" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}
            placeholder="What is the title of your article?" />
              <span class="focus-border"></span>
          </div>
            
      <ReactQuill style={{maxWidth: '800px', width:'100%', minHeight: '300px', marginBottom: '20px'}} theme="snow" value={value} onChange={setValue} />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </>
    );
}

const SubmitButton = styled.button`
    max-width:500px;
    margin: 50px 0px;
    width: 100%;
    padding: 5px 10px;
    font-family: 'Lora', sans-serif;
    font-size: 2rem;
    color: #e85a4f;
    background-color: #fff;
    border: 1px solid #e85a4f;
    text-transform: uppercase;
`