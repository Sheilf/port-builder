import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../styles/flex.css'
import { useState, useEffect } from 'react'
import { Input } from './Input'



export const InputBuilder = () => {

 
  return (
    

    <section className="flex-column-centered">
        Input Builder


        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />

        

    </section>
  );
}

