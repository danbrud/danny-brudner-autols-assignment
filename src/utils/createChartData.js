import { SELECT_OPTIONS } from "../consts"
import moment from 'moment'

const calculateCost = (cost, values) => cost / values

const formatDate = (date) => moment(date).format('l')

export const createCostBySelectionChart = (data, selectDataBy) => {
  const chartData = data
    .map(dataByDay => {
      const values = selectDataBy === SELECT_OPTIONS.cpm.value
        ? dataByDay[selectDataBy] / 1000
        : dataByDay[selectDataBy]

      return { date: dataByDay.timestamp, cost: calculateCost(dataByDay.cost, values) }
    })
    .map(dataElement => (
      { date: formatDate(dataElement.date), cost: parseFloat(dataElement.cost).toFixed(2) }
    ))

  return chartData
}

export const createAmountBySelectionChart = (data, selection) => {
  return data
    .map(dataByDay => ({ date: dataByDay.timestamp, [selection]: dataByDay[selection] }))
    .map(dataElement => ({ date: formatDate(dataElement.date), [selection]: dataElement[selection] }))
}