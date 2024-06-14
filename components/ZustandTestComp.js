'use client'

import React from 'react'
import { useStore } from '@/lib/zustandStore'

const ZustandTestComp = () => {

    const bears = useStore((state) => state.bears)
    const increasePopulation = useStore((state) => state.increasePopulation )
    
  return (
    <div>

        <h1>{bears} around here...</h1>

        <button onClick={increasePopulation}>one up</button>
dasad
    </div>
  )
}

export default ZustandTestComp