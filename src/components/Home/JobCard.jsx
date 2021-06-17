import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '..'

import colors from '../../style/colors'

export default function JobCard({ logos, company, handleSupport }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Container>
      <Card onClick={() => setIsOpen((v) => !v)}>
        <img src={logos[company.logo]} alt="" />
        <JobInfo>
          <p>{company.name}</p>
          <h3>{company.position}</h3>
          <JobTagContainer>
            {company?.tags?.map((tag) => (
              <JobTag key={tag}>{tag}</JobTag>
            ))}
          </JobTagContainer>
        </JobInfo>
        <Time>3m</Time>
        <Button
          className="event-button"
          width="173"
          height="63"
          innerText="지원하기"
          onClick={handleSupport}
          style={{ flexSelf: 'flex-end' }}
        />
      </Card>
      <JobContent isOpen={isOpen}>
        <JobContentText isOpen={isOpen}>
          {company?.contents?.split('\n')?.map((content) => {
            if (content === '') return undefined
            return (
              <React.Fragment key={content}>
                <p>{content}</p>
                <br />
              </React.Fragment>
            )
          })}
        </JobContentText>
      </JobContent>
    </Container>
  )
}

const Container = styled.div`
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
    margin-right: 43px;
  }
`

const JobContent = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 0 0 10px 10px;
  margin-top: -37px;
  margin-bottom: 37px;
  height: ${(props) => (props.isOpen ? '0' : '320px')};
  transition: all ease-in-out 0.2s;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const JobContentText = styled.div`
  padding-left: 52px;

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
    color: #1b1b1b;
    font-size: 24px;
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
  font-size: 28px;
  color: #232323;
  margin-right: 108px;
`
