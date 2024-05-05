import {useState} from 'react';
import JobListing from "./components/JobListing";
import SideNav from "./components/SideNav";
import {Grid} from '@mui/material'

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(0); 

  return (
    <Grid container>
      <Grid item xs={3} style={{ flexBasis: sidebarWidth }}>
      <SideNav setSidebarWidth={setSidebarWidth} />
      </Grid>
      <Grid
        style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}
        item
        xs={9}
      >
        <JobListing/>
      </Grid>
    </Grid>
  
  );
}

export default App;
