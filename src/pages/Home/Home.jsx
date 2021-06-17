import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'
import { Intro } from '../../components/Home'

import useFetchJobs from '../../hooks/useFetchJobs'

import logo from '../../assets/images/remoters.png'
import remoters from '../../assets/images/remoters@3x.png'
import main from '../../assets/images/main.png'
import search from '../../assets/images/search.png'

export default function Home() {
  const { jobs, loading, err } = useFetchJobs()
  const history = useHistory()

  const handleCreateCompany = () => {
    history.push('/company')
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    window.alert('검색버튼 눌림')
  }

  if (loading) return <div>...loading</div>
  if (err) return <div>...err</div>
  return (
    <Container>
      <Intro
        handleCreateCompany={handleCreateCompany}
        handleSearchSubmit={handleSearchSubmit}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
