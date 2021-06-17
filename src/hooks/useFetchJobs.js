import React, { useEffect, useState } from 'react'

export default function useFetchJobs() {
  const [jobs, setJobs] = useState([])
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)

  function fetchData() {
    setLoading(true)
    fetch(
      'https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData'
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        setErr(true)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { jobs, loading, err }
}
