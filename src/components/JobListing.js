import React from 'react'
import JobCard from './JobCard'
import Filters from './Filters'
import { Grid } from '@mui/material'
import useJobListing from '../utils/hooks/useJobListing';

const JobListing = () => {
    const {
        filterParams,
        loading,
        totalCount,
        sidebarWidth,
        handleFilter,
        filteredJobs,
      } = useJobListing();
    
  return (
    <div>
    <h1>Job Listing</h1>
    <Filters/>
    <Grid container spacing={9}>
      {filteredJobs.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.id}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default JobListing