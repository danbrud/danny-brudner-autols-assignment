import { SELECT_OPTIONS } from "../consts"

const calculateCost = (cost, values) => cost / values

export const createChartData = (data, selectDataBy) => {
  const chartData = data.map(dataByDay => {
    const values = selectDataBy === SELECT_OPTIONS.cpm.value
      ? dataByDay[selectDataBy] / 1000
      : dataByDay[selectDataBy]

    return { date: dataByDay.timestamp, cost: calculateCost(dataByDay.cost, values) }
  })

  return chartData
}

