/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    marginLeft: 40,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    
  },
  demo: {
    "& .MuiAutocomplete-inputRoot": {
      color: "transparent"
    }
  },
  option: {
     fontSize: 14,
    '&[data-focus="true"]': {
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

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        getOptionDisabled={(option) => option.year ===  1994}
        classes={{
          option: classes.option
        }}
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[13]]}
        popupIcon={<ExpandMoreTwoToneIcon color="primary"/>}
        renderInput={(params) => (
          <TextField
          
            {...params}
            variant="standard"
            label="Dropdown"
            placeholder="Select multiple items"
            
            
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
];
