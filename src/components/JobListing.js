import React from 'react'
import JobCard from './JobCard'
import Filters from './Filters'

const JobListing = () => {
  return (
    <div>
        <h1>Job Listing</h1>
        <Filters/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div>
  )
}

export default JobListing