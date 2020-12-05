import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export interface GetStartedProps {
  primary: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const GetStarted = (props: GetStartedProps) => {
  const classes = useStyles();

  const btnColor = props.primary == "true" ? 'primary' : 'secondary';

  return (
    <div className={classes.root}>
      <Button variant="contained" color={btnColor} size={props.size} className={[classes.margin].join(' ')} {...props}>
        {props.label}
      </Button>
    </div>
  );
}

