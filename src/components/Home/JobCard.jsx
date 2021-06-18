import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from '..'

import colors from '../../style/colors'

export default function JobCard({ logos, company, handleSupport }) {
  const [isOpen, setIsOpen] = useState(true)
  const [cardHeight, setCardHeight] = useState(null)
  const [innerHeight, setInnerHeight] = useState(null)
  const [createAt, setCreateAt] = useState('')

  const cardRef = useRef(null)
  const innerRef = useRef(null)

  console.log(company)

  // 작성시간 구하는 함수
  function getTime(time) {
    let result = 0
    const seconde = time / 1000
    const minute = seconde / 60
    if (minute <= 59) {
      result = `${Math.floor(minute)}m`
    } else {
      const hour = minute / 60
      if (hour <= 59) {
        result = `${Math.floor(hour)}h`
      } else {
        const day = hour / 24
        result = `${Math.floor(day)}d`
      }
    }
    setCreateAt(result)
  }

  useEffect(() => {
    const createAt = new Date(company.date).getTime()
    const currentTime = new Date().getTime()
    const result = currentTime - createAt
    getTime(result)
  }, [company.date])

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight = cardRef.current.getBoundingClientRect().height
      setCardHeight(cardHeight)
    }
  }, [cardRef])

  useEffect(() => {
    if (innerRef.current) {
      const InnerHeight = innerRef?.current?.getBoundingClientRect().height
      setInnerHeight(InnerHeight)
    }
  }, [innerRef])
  return (
    <Container>
      <Card ref={cardRef} onClick={() => setIsOpen((v) => !v)}>
        <img src={logos[company.logo]} alt="기업로고" />
        <JobInfo>
          <p>{company.name}</p>
          <h3>{company.position}</h3>
          <JobTagContainer>
            {company?.tags?.map((tag) => (
              <JobTag key={tag}>{tag}</JobTag>
            ))}
          </JobTagContainer>
        </JobInfo>
        <Time>{createAt}</Time>
        <Button
          className="event-button"
          width="173"
          height="63"
          innerText="지원하기"
          onClick={handleSupport}
          style={{ flexSelf: 'flex-end' }}
        />
      </Card>
      <JobDescriptionContainer isOpen={isOpen} currentHeight={innerHeight}>
        <JobDescriptionInner ref={innerRef} currentHeight={cardHeight}>
          <ContText>{company.contents}</ContText>
        </JobDescriptionInner>
      </JobDescriptionContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`

const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 31px 58px 31px 51px;
  border-radius: 10px;
  box-shadow: 0 11px 7px 0 rgba(0, 0, 0, 0.04);
  margin-bottom: 36px;
  position: relative;

  .event-button {
    display: none;
  }

  :hover {
    .event-button {
      display: block;
    }
    background: #f3f3f3;
  }

  img {
    width: 111px;
    height: 111px;
    margin-right: 43px;
  }
`

const JobDescriptionContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.isOpen ? '0' : props.currentHeight + 'px')};
  background: #fff;
  border-radius: 0 0 10px 10px;
  margin-top: -45px;
  margin-bottom: 37px;
  transition: all ease-in-out 0.2s;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const JobDescriptionInner = styled.div`
  position: absolute;
  top: ${(props) => props.currentHeight + 'px'};
  left: 0;
  padding: 61px 52px;

  p {
    font-size: 21px;
    font-weight: 500;
    color: #212121;
  }
`

const JobInfo = styled.div`
  flex: 1;
  max-width: 616px;
  display: flex;
  flex-direction: column;

  p {
    font-family: Montserrat;
    color: #181918;
    font-size: 24px;
    font-weight: 500;
  }

  h3 {
    color: #1b1b1b;
    font-size: 26px;
    font-weight: bold;
  }
`

const JobTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const JobTag = styled.span`
  margin-top: 9px;
  display: inline;
  width: fit-content;
  height: 34px;
  border-radius: 17px;
  padding: 17px 19px;
  border: 1px solid ${colors['purple']};
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 17px;
  font-weight: 500;
  font-family: Montserrat;
  color: ${colors['purple']};
`

const Time = styled.p`
  font-size: 19px;
  color: #232323;
  margin-right: 108px;
`

const ContText = styled.p`
  font-size: 21px;
  font-weight: 500;
  color: #212121;
  white-space: pre-wrap;
`
