import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export default function Sekeleton() {
  return (
    <div>
      <Container sx={{display:'flex'}}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
           <Skeleton variant="rectangular" height={250} />
          </Grid>
          <Grid item xs={3}>
           <Skeleton variant="rectangular" height={250} />
          </Grid>
          <Grid item xs={3}>
           <Skeleton variant="rectangular" height={250} />
          </Grid>
          <Grid item xs={3}>
           <Skeleton variant="rectangular" height={250} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
