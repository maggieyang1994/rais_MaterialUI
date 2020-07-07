/* eslint-disable no-use-before-define */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 200,
    textAlign: "left", 
    "& .MuiPapre-root": {
       left:  "0 !important", 
       backgroundColor: "red !important"
    },
    "& .MuiInput-underline.Mui-disabled:before":{
      borderBottomStyle: 'solid'
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "white"
    }
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
    borderRadius: 30,
    backgroundColor: "#E2E2E2"
  },
  option: {
    '&:hover': {
      backgroundColor: "#2D80E2",
      color: "#FFF"
    },
    '&[aria-selected="true"]': {
      backgroundColor: "#E2E2E2",
      color: "#383838",
      fontWeight: "bolder"
    },
  }
}));

export default function Tags() {
  const classes = useStyles();
  let isOpen=false
  return (
    <div>
      <FormControl className={classes.root}>
        <InputLabel id="demo-simple-select-label" variant="outlined">Age</InputLabel>
        <Select
        displayEmpty = {true}
          multiple
          defaultValue = {[]}
          className={classes.select}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={options.find(x => x.value === value).name} className={classes.chip} />
              ))}
            </div>
          )}
          IconComponent={() => <ExpandMoreTwoToneIcon color="primary" />}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
        >
          {
            options.map(x => {
              return (
                <MenuItem value={x.value} key={x.key} className={classes.option}>{x.name}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = Array.from({ length: 13 }, (v, i) => ({ key: i + 1, value: i + 1, name: "ten" + i + 1 }))

