import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    // boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: '50%',
    width: 16,
    height: 16,
    backgroundColor: 'white',
    
    'input:disabled ~ &': {
      boxShadow: 'none',
      backgroundColor: "#E2E2E2",
      border: "none"
    },
  },
  checkedIcon: {
    border: "1px solid #2D80E2",
    backgroundColor: "white",
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#2D80E2,#2D80E2 50%,transparent 32%)',
      content: '""',
    }
  },
  disableCheckedIcon: {
    border: "1px solid #A7A7A7!important",
    backgroundColor: "white!important",
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#A7A7A7,#A7A7A7 50%,transparent 32%)',
      content: '""'
    }
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();
  const {disabled} = props
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, !disabled ? classes.checkedIcon : classes.disableCheckedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios() {
  return (
    <div>
      <StyledRadio
        checked={true}
      /><br/>
      <StyledRadio
        checked={false}
      /><br/>
       <StyledRadio
        checked={true}
        disabled
      /><br/>
      <StyledRadio
        checked={false}
        disabled
      />
    </div>
  );
}
