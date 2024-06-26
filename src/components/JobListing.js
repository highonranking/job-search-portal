import React from 'react'
import JobCard from './JobCard'
import Filters from './Filters'
import { Grid } from '@mui/material'
import useJobListing from '../utils/hooks/useJobListing';
import ShimmerJobCard from './ShimmerJobCard';


const renderSkeletons = () => {
    return (
        <Grid container spacing={3} style={{marginTop:"44px"}}>
            {Array.from({ length: 6 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <ShimmerJobCard/>
                </Grid>
            ))}
        </Grid>
    );
};


const JobListing = () => {
    const {
        loading,
        filteredJobs,
        handleFilter,
      } = useJobListing();

    

  return (
    <div>
    <h1 style={{fontWeight:300}}>Search Jobs</h1>
    <Filters onFilter={handleFilter}/>
    <Grid container spacing={9}>
        { 
            filteredJobs.map((job) => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                    <JobCard job={job} />
                </Grid>
            ))
        }
    </Grid>
    {loading && renderSkeletons()}
</div>
  )
}

export default JobListing