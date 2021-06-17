import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'
import { Intro, Jobs } from '../../components/Home'

import useFetchJobs from '../../hooks/useFetchJobs'

import nocheck from '../../assets/images/nocheck.png'
import oncheck from '../../assets/images/check.png'
import github from '../../assets/images/github.png'
import microsoft from '../../assets/images/microsoft.png'
import kakao from '../../assets/images/kakao.png'
import zigzag from '../../assets/images/zigzag.png'

const logos = {
  company_logo1: github,
  company_logo2: kakao,
  company_logo3: microsoft,
  company_logo4: zigzag,
}

export default function Home() {
  const [currJobs, setCurrentJobs] = useState([])
  const { jobs, handleAvtive, loading, err } = useFetchJobs()
  const history = useHistory()

  const handleCreateCompany = () => {
    history.push('/company')
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    window.alert('검색버튼 눌림')
  }

  const handleSupport = (e) => {
    e.stopPropagation()
    window.alert('지원하기 눌림')
  }

  useEffect(() => {
    setCurrentJobs(jobs)
  }, [jobs])

  if (loading) return <div>...loading</div>
  if (err) return <div>...err</div>
  return (
    <Container>
      <Intro
        handleCreateCompany={handleCreateCompany}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Section>
        <Inner>
          {jobs.map((job, i) => (
            <Article>
              <TitleBox>
                <h2>오늘 올라온 잡</h2>
                <CheckButton onClick={() => handleAvtive(i)}>
                  {!job.active && <img src={nocheck} alt="" />}
                  {job.active && <img src={oncheck} alt="" />}
                  <p>Non-IT 잡만 보기</p>
                </CheckButton>
              </TitleBox>
              <Content>
                <Jobs
                  jobs={job.data}
                  logos={logos}
                  handleSupport={handleSupport}
                />
              </Content>
            </Article>
          ))}
        </Inner>
      </Section>
      {/* <Section>
        <Inner>
          <Article>
            <TitleBox>
              <h2>오늘 올라온 잡</h2>
              <CheckButton onClick={handleCheckBox}>
                {!check && <img src={nocheck} alt="" />}
                {check && <img src={oncheck} alt="" />}
                <p>Non-IT 잡만 보기</p>
              </CheckButton>
            </TitleBox>
            <Content>
              <Jobs
                jobs={jobs?.todayJobs}
                logos={logos}
                handleSupport={handleSupport}
              />
            </Content>
          </Article>
          <Article>
            <TitleBox>
              <h2>이번주에 올라온 잡</h2>
              <CheckButton onClick={handleCheckBox}>
                {!check && <img src={nocheck} alt="" />}
                {check && <img src={oncheck} alt="" />}
                <p>Non-IT 잡만 보기</p>
              </CheckButton>
            </TitleBox>
            <Content>
              <Jobs
                jobs={jobs?.weeklyJobs}
                logos={logos}
                handleSupport={handleSupport}
              />
            </Content>
          </Article>
        </Inner>
      </Section> */}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Section = styled.section`
  width: 100%;
  background: #f9f9f9;
`

const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding-top: 176px;
  padding-bottom: 100px;
`

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 52px;
`

const CheckButton = styled.button`
  display: flex;
  align-items: center;

  p {
    padding-left: 10px;
    color: #3f3f3f;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Article = styled.article``
