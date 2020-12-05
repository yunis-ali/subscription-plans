import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Header } from './header.component';
import { Currency } from './currency.component';
import { BillingPeriod } from './billing-period.component';
import { Plans } from './plans.component';
import { Calculator } from './calculator.component';
import { GetStarted } from './get-started.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: '0%'
    },
  }),
);

export interface IndexProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onSignUp: () => void;
  onGetStarted: () => void;
}

function IndexUI(props: IndexProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={8}>
          <Header title="Subscription Plans" user={props.user} onLogin={props.onLogin} onLogout={props.onLogout} onSignUp={props.onSignUp} />
        </Grid>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Currency label="Currency"></Currency>
              </Grid>
              <Grid item xs={6}>
                <BillingPeriod></BillingPeriod>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={8}>
          <Plans></Plans>
          <Calculator></Calculator>
        </Grid>
        <Grid item xs={2}>

        </Grid>
        
        <Grid item xs={9}>

        </Grid>
        <Grid item xs={3}>
          <GetStarted primary="true" label="Get Started" onClick={props.onGetStarted}></GetStarted>
        </Grid>
      </Grid>
    </div>
  );
}

export const Index = (props: IndexProps) => (
  <IndexUI {...props} />
);