import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { DefaultState } from './index.stories'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Home() { 
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid>
                    <DefaultState />
                </Grid>
            </div>
        </>
    )
}