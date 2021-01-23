import moment from 'moment'
import React, { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { SELECT_OPTIONS } from '../consts'
import { createChartData } from '../utils/createChartData'

const CostPerChart = ({ data }) => {
  const [selection, setSelection] = useState(SELECT_OPTIONS.cpm)

  const handleSelection = e => setSelection(e.target.value)

  const chartData = createChartData(data, selection)
    .map(dataElement => (
      { date: moment(dataElement.date).format('l'), cost: parseFloat(dataElement.cost).toFixed(2) }
    ))

  const selectionOptions = [SELECT_OPTIONS.cpm, SELECT_OPTIONS.cpc, SELECT_OPTIONS.costPerConversion]
  return (
    <div id="sales-by" className="chart">
      <h5>View By:</h5>
      <select id="sales-by-selection" value={selection} onChange={handleSelection}>
        {
          selectionOptions.map((selection, i) => (
            <option key={i} value={selection.value}>{selection.name}</option>
          ))
        }
      </select>
      <BarChart width={700} height={250} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='cost' fill='#955196' />
      </BarChart>
    </div>
  )
}

export default CostPerChart