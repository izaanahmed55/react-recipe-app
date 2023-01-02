import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const Search = () => {

    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        console.log("hey")
    }

  return (
    <FormStyle onSubmit={(e) => {
        e.preventDefault();
    }}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    // margin: 0rem 20rem;
        div{
            width: 100%;
            position: relative;
        }
    width: 100%;
    input{
        border: none;
        background: gray;
        font-size: 1rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;