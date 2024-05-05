import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = () => {
  return (
    <Card>
        <CardContent>
            <Grid container spacing={4}>
                <Grid item>
                    <img src="https://pngimg.com/uploads/bruce_lee/bruce_lee_PNG44.png"/>
                </Grid>
                <Grid item xs={12} sm>
                    <div>
                        <Typography variant='h5'>frontend</Typography>
                        <Typography variant='body1'>Weekday</Typography>
                        <Typography variant='body1'>Bengaluru</Typography>
                        <Typography variant='body2'>Job Description</Typography>
                        <Button>read more</Button>
                    </div>
                </Grid>
            </Grid>
            <div>
                <Typography variant='body1'>1-3 years experience</Typography>
                <Button>Apply Now</Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default JobCard