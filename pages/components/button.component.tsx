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

export interface ContainedButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const ContainedButton = (props: ContainedButtonProps) => {
  const classes = useStyles();

  const btnColor = props.primary ? 'primary' : 'secondary';

  return (
    <div className={classes.root}>
      <Button variant="contained" color={btnColor} size={props.size} className={[classes.margin].join(' ')} {...props}>
        {props.label}
      </Button>
    </div>
  );
}
