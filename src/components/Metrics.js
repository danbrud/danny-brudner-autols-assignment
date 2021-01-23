import React from 'react'
import dataSet from '../data.json'
import CostPerChart from './CostPerChart'

const Metrics = () => {
  const { title, data } = dataSet


  return (
    <div>
      <h2>{title}</h2>
      <CostPerChart data={data} />
    </div>
  )
}

export default Metrics