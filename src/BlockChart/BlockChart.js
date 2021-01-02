import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../styles/flex.css'
import { useState, useEffect } from 'react'

import { Block } from './Block'

export const BlockChart = () => {

  //first load, get list from user.
  const [blockChart, setBlockChart] = useState([
    {},
    {},
    {},
    {},
    {}
  ])
 

  //a block chart returns a set of blocks
  return (
    

    <section className="flex-column-centered">
      <h2> Blocks </h2>
      <Block blockChart = { blockChart } />
    </section>
  );
}

