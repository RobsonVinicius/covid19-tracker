import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {  
  if(!confirmed) {
    return 'Loading...';
  }
  return (    
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xd={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography className={cx(styles.infectedTitle)} gutterBottom>Infectados</Typography>
            <Typography variant="h5" className={cx(styles.infectedNumber)}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator="."
              />              
            </Typography>
            <Typography className={cx(styles.infectedDate)} gutterBottom>
              {new Date(lastUpdate).toLocaleDateString()}  
            </Typography>
            <Typography variant="body2" className={cx(styles.infectedText)}>Números de casos ativos de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xd={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography className={cx(styles.recoveredTitle)} gutterBottom>Recuperados</Typography>
            <Typography variant="h5" className={cx(styles.recoveredNumber)}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator="."
              />              
            </Typography>
            <Typography className={cx(styles.recoveredDate)} gutterBottom>
              {new Date(lastUpdate).toLocaleDateString()}  
            </Typography>
            <Typography variant="body2" className={cx(styles.recoveredText)}>Números de recuperados de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xd={12} md={3} className={cx(styles.card, styles.deaths)} >
          <CardContent>
            <Typography className={cx(styles.deathsTitle)} gutterBottom>Mortes</Typography>
            <Typography variant="h5" className={cx(styles.deathsNumber)}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator="."
              />              
            </Typography>
            <Typography className={cx(styles.deathsDate)} gutterBottom>
              {new Date(lastUpdate).toLocaleDateString()}  
            </Typography>
            <Typography variant="body2" className={cx(styles.deathsDate)}>Números de mortos por COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default cards;