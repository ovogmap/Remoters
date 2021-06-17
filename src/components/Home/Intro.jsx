import React from 'react'
import styled from 'styled-components'

import { Button } from '..'
import Input from './Input'

import logo from '../../assets/images/remoters.png'
import remoters from '../../assets/images/remoters@3x.png'
import main from '../../assets/images/main.png'

export default function Intro({
  handleCreateCompany,
  handleSearchSubmit,
  input,
  onChange,
}) {
  return (
    <Container>
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
        <Section>
          <SectionLeft>
            <div>
              <img src={remoters} alt="큰사이즈 로고" />
              <p>[명사] 시간과 공간의 제약을 받지않고 일하는 사람</p>
            </div>
            <Input
              handleSearchSubmit={handleSearchSubmit}
              input={input}
              onChange={onChange}
            />
          </SectionLeft>
          <SectionRight>
            <img src={main} alt="" />
          </SectionRight>
        </Section>
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 786px;
  background: rgba(98, 115, 232, 0.1);
`

const Inner = styled.div`
  margin: 0 auto;
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

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 88px;

  img {
    max-width: 467px;
  }
`

const SectionLeft = styled.div`
  height: 385px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p {
    font-size: 30px;
    font-weight: 500;
  }
`

const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 481px;
    height: 385px;
  }
`
