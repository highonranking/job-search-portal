import React, {useState} from 'react';
import { Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Chip, } from '@mui/material';

const JobCard = ({job}) => {
    const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item>
            <img
              src={job.logoUrl}
              alt="Company Logo"
              className="company-logo"
            />
          </Grid>
          <Grid item xs={12} sm>
            <div className="info-container">
              <Typography variant="h5">{job.jobRole}</Typography>
              <Typography variant="body1">
                Company: {job.companyName}
              </Typography>
              <Typography variant="body1">Location: {job.location}</Typography>
              <Typography variant="body2" className="description">
                Description:{" "}
                {job.jobDetailsFromCompany
                  ? expanded
                    ? job.jobDetailsFromCompany
                    : `${job.jobDetailsFromCompany.substring(0, 100)}...`
                  : "No description available"}
                <Button onClick={handleExpandClick} className="expand-button">
                  {expanded ? "Read less" : "Read more"}
                </Button>
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className="info-container">
          <Typography variant="body1" className="experience">
            Experience Required: {job.minExp} years to {job.maxExp} years
          </Typography>
          <Button variant="contained" color="primary" className="apply-button">
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>

  )
}

export default JobCard