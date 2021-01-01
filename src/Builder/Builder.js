import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../styles/flex.css'
import { useState, useEffect } from 'react'


import {BlockChart} from '../BlockChart/BlockChart'
import {CardGrid} from '../CardGrid/CardGrid'

export const Builder = () => {

  const [mode, setMode] = useState('chart')

    //   useEffect(() =>{


    //   }, [mode])

  const isModeChart = mode === 'chart'
  const isModeCard  = mode === 'card'

  return (


    <section className="flex-column-centered">
        
        <div>

        </div>

        <ButtonGroup size="lg" className="mb-2">
            <Button onClick = { () => setMode('chart') } style={{ margin: '16px', border: isModeChart ? '2px solid cyan': null }}>Chart mode</Button>
            <Button onClick = { () => setMode('card')  } style={{ margin: '16px', border: isModeCard ? '2px solid cyan': null }}>Card mode</Button>
        </ButtonGroup>



        {/* conditional re-render ok for now. May change based on API setup */}
        {
            isModeChart ? 
            <BlockChart />
            :
            <CardGrid />
        }
    </section>




  );
}

