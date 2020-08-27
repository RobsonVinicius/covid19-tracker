import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

const cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {  
  if(!confirmed) {
    return 'Loading...';
  }
  return (    
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infectados</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator="."
              />              
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toLocaleDateString()}  
            </Typography>
            <Typography variant="body2">Números de casos ativos de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator="."
              />              
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toLocaleDateString()}  
            </Typography>
            <Typography variant="body2">Números de recuperados de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortes</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator="."
              />              
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toLocaleDateString()}  
            </Typography>
            <Typography variant="body2">Números de mortos por COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default cards;