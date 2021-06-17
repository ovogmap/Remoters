import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'

export default function SearchResult() {
  const history = useHistory()

  const handleGoBack = () => {
    history.goBack()
  }
  return (
    <Container>
      <Inner>
        <h1>회사 등록 페이지</h1>
        <Button
          innerText="뒤로가기"
          width={250}
          height={60}
          onClick={handleGoBack}
        />
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(98, 115, 232, 0.1);
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }
`
