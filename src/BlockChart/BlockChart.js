import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../styles/flex.css'
import { useState, useEffect } from 'react'
import { Block } from './Block'

export const BlockChart = (props) => {

  return (
    

    <section className="flex-column-centered">
      <h2> Blocks </h2>
      { props.blocks.map(item => <Block />) }
    </section>
  );
}

