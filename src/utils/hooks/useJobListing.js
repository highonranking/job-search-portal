import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector,useCallback } from "react-redux";
import { fetchJobs } from '../features/jobs/jobSlice';
import debounce from "lodash.debounce";


const useJobListing = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs);
    const loading = useSelector((state) => state.jobs.loading);
    const totalCount = useSelector((state) => state.jobs.totalCount);

    const [filterParams, setFilterParams] = useState({
        minExperience: "",
        companyName: "",
        location: "",
        remote: false,
        techStack: "",
        jobRole: "",
        minBasePay: "",
      });


    const [page, setPage] = useState(1);
    const [sidebarWidth, setSidebarWidth] = useState(0);

    const delayedFetchJobs = useCallback(
        debounce((params) => dispatch(fetchJobs(params)), 500),
        [dispatch]
    );

    useEffect(() => {
        // Fetch initial set of jobs
        delayedFetchJobs({ offset: 0, filters: filterParams });
        return delayedFetchJobs.cancel;
      }, [delayedFetchJobs, filterParams]);


    return {
      };
};

export default useJobListing;