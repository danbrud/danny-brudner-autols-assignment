import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { CHART_TITLES } from '../consts'
import { toProperCase } from '../utils/utils'
import CustomizedAxisTicks from './CustoizedAxisTicks'

const CostPerChart = ({ data, selection, dataKey, createChart }) => {
  const chartData = createChart(data, selection)

  return (
    <div className='chart'>
      <h3>{toProperCase(dataKey).toUpperCase()}</h3>
      <ResponsiveContainer width='80%' height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' tick={<CustomizedAxisTicks />} height={60} />
          <YAxis />
          <Tooltip
            formatter={(value, name) => ([
                name === CHART_TITLES.cost ? `$${value}` : new Intl.NumberFormat().format(value),
                toProperCase(name)
              ])}
          />
          <Bar dataKey={dataKey} fill='#27B6F5' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CostPerChart