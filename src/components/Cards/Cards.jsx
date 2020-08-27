import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

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
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary" gutterBottom>Data atual</Typography>
            <Typography variant="body2">Números de casos ativos de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
            <Typography variant="h5">Banco de Dados</Typography>
            <Typography color="textSecondary" gutterBottom>Data atual</Typography>
            <Typography variant="body2">Números de recuperados de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortes</Typography>
            <Typography variant="h5">Banco de Dados</Typography>
            <Typography color="textSecondary" gutterBottom>Data atual</Typography>
            <Typography variant="body2">Números de mortos por COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default cards;