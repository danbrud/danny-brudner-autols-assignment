import React from 'react'

const CustomizedAxisTicks = ({ x, y, payload }) => {


  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor='end' fill='#666' transform='rotate(-35)'>
        {payload.value}
      </text>
    </g>
  )
}

export default CustomizedAxisTicks