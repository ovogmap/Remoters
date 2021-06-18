import React from 'react'
import styled from 'styled-components'

import nocheck from '../../assets/images/nocheck.png'
import oncheck from '../../assets/images/check.png'
import Jobs from './Jobs'

export default function Content({
  jobData,
  handleActive,
  title,
  logos,
  handleSupport,
}) {
  return (
    <Section>
      <Inner>
        {jobData.map((job, i) => (
          <article key={job.type}>
            <Header>
              <h2>{title[job.type]}</h2>
              <CheckButton onClick={() => handleActive(i)}>
                {!job.active && <img src={nocheck} alt="" />}
                {job.active && <img src={oncheck} alt="" />}
                <p>Non-IT 잡만 보기</p>
              </CheckButton>
            </Header>
            <JobContainer>
              <Jobs
                jobs={job.data}
                logos={logos}
                handleSupport={handleSupport}
              />
            </JobContainer>
          </article>
        ))}
      </Inner>
    </Section>
  )
}

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

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 52px;

  h2 {
    font-size: 30px;
    font-weight: bold;
    color: #000000;
  }
`

const CheckButton = styled.button`
  display: flex;
  align-items: center;

  p {
    padding-left: 10px;
    color: #3f3f3f;
    font-size: 19px;
    font-weight: 500;
  }
`

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
`
