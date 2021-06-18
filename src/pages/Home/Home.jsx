import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Intro, Content, ScrollTop } from '../../components/Home'
import { logos, title } from '../../constants'

import useFetchJobs from '../../hooks/useFetchJobs'
import useInput from '../../hooks/useInput'

export default function Home() {
  // job데이터 불러오는 커스텀 훅
  const { jobData, handleActive, loading, err } = useFetchJobs()

  // 검색창에 사용하는 input state
  const { input, onChange, resetInput } = useInput()
  const history = useHistory()

  // 회사 등록하기 이벤트
  const handleCreateCompany = () => {
    history.push('/company')
  }

  // 검색하기 버튼 이벤트
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    window.alert('검색버튼 눌림')
    resetInput()
  }

  // 지원하기 버튼 이벤트
  const handleSupport = (e) => {
    e.stopPropagation()
    window.alert('지원하기 눌림')
  }

  // 스크롤 최상단으로 가는 이벤트
  const handleGoToScrollTop = () => {
    window.scrollTo(0, 0)
  }

  if (loading) return <div>...loading</div>
  if (err) return <div>...err</div>
  return (
    <Container>
      <Intro
        handleCreateCompany={handleCreateCompany}
        handleSearchSubmit={handleSearchSubmit}
        input={input}
        onChange={onChange}
      />
      <Content
        jobData={jobData}
        handleActive={handleActive}
        title={title}
        logos={logos}
        handleSupport={handleSupport}
      />
      <ScrollTop handleGoToScrollTop={handleGoToScrollTop} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
