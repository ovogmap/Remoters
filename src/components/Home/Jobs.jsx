import React from 'react'
import JobCard from './JobCard'

export default function Jobs({ jobs, handleSupport, logos }) {
  return (
    <>
      {jobs?.map((company) => (
        <JobCard
          key={company.date}
          company={company}
          logos={logos}
          handleSupport={handleSupport}
        />
      ))}
    </>
  )
}
