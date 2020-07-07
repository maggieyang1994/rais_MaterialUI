import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    color: "#2D80E2"
  },
  enable: {
    color: "#2D80E2"
  },
  file: {
    top: 0,
    left: 0,
    position: "absolute",
    display: "inline-block",
    width: "100%",
    height: "100%",
    opacity: 0,
  }
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const accept = "xlsx,pdf,txt"
  const handleFileUpload = (e) => {
    e.preventDefault()
    props.handleUplaod && props.handleUplaod(e);
    if (e.target.files.length) {
      let name = e.target.files[0].name
      setValue(name);
      if (accept) {
        if (!accept.split(",").includes(name.substring(name.lastIndexOf(".")+1))) setError(true)
        else setError(false)
      }
    }

  }

  return (
    <FormControl className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic"
       disabled
        label="Standard"
        error={error}
        value={value}
        InputProps={{
          endAdornment: (
            <span className={classes.enable}>Browse</span>
          ),
        }}
      />
      <input type="file" className={classes.file} onChange={(e) => {console.log(e) }} />
      {error ? <FormHelperText id="my-helper-text" error={error}>
        <ErrorIcon color="error" fontSize="small" />
        <span>Unsupported file type</span>
      </FormHelperText> : ""}

    </FormControl >
  );
}
