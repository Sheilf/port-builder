import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import '../styles/flex.css'
import { useState, useEffect } from 'react'



export const Input = () => {

 
  return (
    

    <section className="flex-column-centered">
        
        <InputGroup className="mb-3">

            <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>

            <FormControl aria-label="Text input with checkbox" />
        </InputGroup>

        

    </section>
  );
}

