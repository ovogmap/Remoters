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
        const newData = Object.keys(data).map((key) => ({
          data: data[key],
          active: false,
          type: key,
        }))
        console.log(newData)
        setJobs(newData)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        setErr(true)
      })
  }

  const handleAvtive = (index) => {
    let newArr = [...jobs]
    newArr[index].active = !newArr[index].active
    setJobs(newArr)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { jobs, handleAvtive, loading, err }
}
