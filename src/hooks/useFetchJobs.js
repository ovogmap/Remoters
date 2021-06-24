import React, { useEffect, useState } from 'react'

export default function useFetchJobs() {
  const [jobData, setJobData] = useState([])
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)

  // async await으로 변경
  // 커스텀 훅으로 만드는 것보다 컴포넌트 내부에서 만드는게 더 좋은것 같다...
  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(
        'https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData'
      ).then((res) => res.json())

      const newData = Object.keys(res).map((key) => ({
        data: res[key],
        active: false,
        type: key,
      }))
      setJobData(newData)
    } catch (e) {
      setErr(true)
    }
    setLoading(false)
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
