import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../styles/flex.css'
import { useState, useEffect } from 'react'
import { Input } from './Input'



export const Block = (props) => {

  const [block, setBlock] = useState({})
  return (
    

    <section className="flex-column-centered">


      { props.blockChart.map(item => <Input />) }

        

    </section>
  );
}

