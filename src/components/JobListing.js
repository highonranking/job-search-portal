import React from 'react'
import JobCard from './JobCard'
import Filters from './Filters'
import { Grid } from '@mui/material'

const JobListing = () => {
  return (
    <div>
        <h1>Job Listing</h1>
        <Filters/>
        <Grid container spacing={9}>
            <Grid item xs={12} sm={6} md={4}>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </Grid>
        </Grid>
       
    </div>
  )
}

export default JobListing