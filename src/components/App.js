import React, { useEffect, useState } from 'react'

export const App = ({ trendsService }) => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    trendsService.fetchAll().then(setTrends)
  }, [trendsService])

  return <>
    <ul>
      {trends.map(trend => <li key={trend.repository.url}>{trend.repository.name}</li>)}
    </ul>
  </>
}
