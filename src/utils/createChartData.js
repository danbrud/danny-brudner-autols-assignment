export const createChartData = (data, selectDataBy) => {
  return data.map(dataByDay => (
    { date: dataByDay.timestamp, cost: dataByDay.cost / dataByDay[selectDataBy] }
  ))
}