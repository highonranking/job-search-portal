import JobListing from "./components/JobListing";
import SideNav from "./components/SideNav";
import {Grid} from '@mui/material'

function App() {
  return (
    <Grid container>
        <Grid item xs={3}>
          <SideNav/>
        </Grid>
        <Grid item xs={9}>
            <JobListing/>
        </Grid>
    </Grid>
  
  );
}

export default App;
