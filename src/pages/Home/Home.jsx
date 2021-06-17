import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'

import useFetchJobs from '../../hooks/useFetchJobs'

import logo from '../../assets/images/remoters.png'

export default function Home() {
  const { jobs, loading, err } = useFetchJobs()
  const history = useHistory()

  const handleCreateCompany = () => {
    history.push('/company')
  }
  if (loading) return <div>...loading</div>
  if (err) return <div>...err</div>
  return (
    <Container>
      <Intro>
        <Inner>
          <Header>
            <img src={logo} alt="" />
            <Button
              width="241"
              height="63"
              innerText="회사 등록하기"
              onClick={handleCreateCompany}
            />
          </Header>
        </Inner>
      </Intro>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Intro = styled.div`
  width: 100%;
  height: 786px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(98, 115, 232, 0.1);
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding-top: 89px;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
