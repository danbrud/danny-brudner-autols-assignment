import React, { useState } from 'react'
import { SELECT_OPTIONS } from '../consts'
import { toProperCase } from '../utils/utils'
import dataSet from '../data.json'
import CostPerChart from './CostPerChart'
import SelectDropdown from './SelectDropdown'
import { createAmountBySelectionChart, createCostBySelectionChart } from '../utils/createChartData'

const Metrics = () => {
  const [selection, setSelection] = useState(SELECT_OPTIONS.cpm.value)
  const { title, data } = dataSet

  const handleSelection = e => setSelection(e.target.value)

  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <SelectDropdown
        selection={selection}
        handleSelection={handleSelection}
      />
      <CostPerChart
        data={data}
        selection={selection}
        dataKey={'cost'}
        createChart={createCostBySelectionChart}
      />
      <CostPerChart
        data={data}
        selection={selection}
        dataKey={selection}
        createChart={createAmountBySelectionChart}
      />
    </div>
  )
}

export default Metrics