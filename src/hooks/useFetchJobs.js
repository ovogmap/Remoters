import React, { useEffect, useState } from 'react'

export default function useFetchJobs() {
  const [jobData, setJobData] = useState([])
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)

  function fetchData() {
    setLoading(true)
    fetch(
      'https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData'
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = Object.keys(data).map((key) => ({
          data: data[key],
          active: false,
          type: key,
        }))
        console.log(newData)
        setJobData(newData)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        setErr(true)
      })
  }

  const handleActive = (index) => {
    let newArr = [...jobData]
    newArr[index].active = !newArr[index].active
    setJobData(newArr)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { jobData, handleActive, loading, err }
}
