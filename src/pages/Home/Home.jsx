import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'

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
          <Section>
            <SectionLeft>
              <div>
                <img src={remoters} alt="" />
                <p>[명사] 시간과 공간의 제약을 받지않고 일하는 사람</p>
              </div>
              <Input onSubmit={handleSearchSubmit}>
                <input type="text" />
                <button type="submit" />
              </Input>
            </SectionLeft>
            <SectionRight>
              <img src={main} alt="" />
            </SectionRight>
          </Section>
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

const Input = styled.form`
  width: 454px;
  height: 76px;
  background: #fff;
  border-radius: 38px;
  box-shadow: 0 6px 39px 0 rgba(165, 165, 165, 0.31);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 23px 32px;

  input {
    border: none;
    background: initial;
    height: 100%;
    flex: 1;
    font-size: 24px;
    font-weight: 600;
    outline: none;
  }

  button {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-image: url(${search});
    background-position: center center;
    background-repeat: no-repeat;
    background-color: inherit;
    border: none;
    cursor: pointer;
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
