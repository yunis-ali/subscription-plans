import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const SimpleSelect = ({label}) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as number);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">{label}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={selectedValue}
          onChange={handleChange}
        >
          <MenuItem value={0} selected>GBP (£)</MenuItem>
          <MenuItem value={1}>EUR (€)</MenuItem>
          <MenuItem value={2}>USD ($)</MenuItem>
          <MenuItem value={3}>AUD ($)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
