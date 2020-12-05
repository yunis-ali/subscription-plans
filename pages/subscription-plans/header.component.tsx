import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { GetStarted } from './get-started.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onSignUp: () => void;
  title: string;
}

function HeaderUI(props: HeaderProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>{props.title}</h1>
        </Grid>
        {props.user ? (
          <>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
              <GetStarted primary="true" size="small" onClick={props.onLogout} label="Log out" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={3}>
              <GetStarted primary="false" size="small" onClick={props.onLogin} label="Log in" />
            </Grid>
            <Grid item xs={3}>
            <GetStarted primary="false" size="small" onClick={props.onSignUp} label="Sign up" />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export const Header = (props:HeaderProps ) => (
  <HeaderUI {...props} />
);
