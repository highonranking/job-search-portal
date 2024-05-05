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

    useEffect(() => {
        dispatch(fetchJobs({ offset: 0, filters: filterParams }));
        }, [dispatch, filterParams]);

    const handleFilter = (filters) => {
        // Reset page count when filters change
        setPage(1);
        setFilterParams(filters);
    };

    // infinite scrolling logic implementation

    const handleScroll = useCallback(() => {
        const handleScrollLogic = () => {
          if (
            window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 100 &&
            jobs.length < totalCount &&
            !loading
          ) {
            dispatch(fetchJobs({ offset: jobs.length, filters: filterParams }));
          }
         };
            // Debounce the scroll event for performance optimization
            const debouncedHandleScroll = debounce(handleScrollLogic, 200); // Adjust debounce delay as needed

            // Add event listener for scroll
            window.addEventListener("scroll", debouncedHandleScroll);

            // Cleanup function to remove event listener
            return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
            };
        }, [dispatch, jobs.length, totalCount, loading, filterParams]);

        useEffect(() => {
            handleScroll(); // Call the handleScroll function once on initial render
            }, [handleScroll]);


    return {
      };
};

export default useJobListing;