import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../styles/flex.css'
import { useState, useEffect } from 'react'


import {BlockChart} from '../BlockChart/BlockChart'
import {CardGrid} from '../CardGrid/CardGrid'

export const Builder = () => {

  const [mode, setMode] = useState('card')

  const [cards, setCards] = useState([ 
    {},
    {},
    {}
  ])

  const [blocks, setBlocks] = useState([
    {},
    {},
    {},

  ])




  const isModeChart = mode === 'block'
  const isModeCard  = mode === 'card'


  //get database data and set mode

  return (


    <section className="flex-column-centered">
        
        <div>

        </div>

        <ButtonGroup size="lg" className="mb-2">
            <Button onClick = { () => setMode('block') } style={{ margin: '16px', border: isModeChart ? '2px solid #7E93E8': null }}>Blocks</Button>
            <Button onClick = { () => setMode('card')  } style={{ margin: '16px', border: isModeCard ? '2px solid #7E93E8': null }}>Cards</Button>
        </ButtonGroup>



        {/* conditional re-render ok for now. May change based on API setup */}
        {
            isModeChart ? 
            <BlockChart blocks={blocks}/>
            :
            <CardGrid cards={cards}/>
        }
    </section>




  );
}

