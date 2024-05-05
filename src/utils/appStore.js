import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './features/jobs/jobSlice';


export default configureStore({
    reducer: {
      jobs: jobReducer,
    },
  });
  