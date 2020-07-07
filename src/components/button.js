import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const PrimaryButton = withStyles({
  root: {
    // border: "3px solid rgba(0, 178, 255, 0.3)",
    height: 40,
    boxSizing: "border-box",
    boxShadow: 'none',
    fontSize: 14,
    padding: '12px 30px',
    minWidth: 120,
    lineHeight: 1.5,
    backgroundColor: '#2D80E2',
    borderRadius: 40,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#00D1FF',
      border: "none"
    },
    '&:active': {
      boxShadow: 'none',
      background: "#00D1FF",
      border: "3px solid rgba(0, 178, 255, 0.3)",
      padding: '12px 27px',
    },
    '&:disabled': {
      boxShadow: 'none',
      color: "#A7A7A7",
      background: "#E2E2E2",
    },
  },
})(Button);

const SecondaryButton = withStyles({
  root: {
    height: 40,
    boxSizing: "border-box",
    boxShadow: 'none',
    fontSize: 14,
    padding: '12px 30px',
    minWidth: 120,
    border: '1px solid #2D80E2',
    lineHeight: 1.5,
    backgroundColor: '#FFF',
    color: "#2D80E2",
    borderRadius: 40,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      boxShadow: 'none',
      border: "none",
      color: "white",
      backgroundColor: '#2D80E2',
      borderRadius: 40,
    },
    '&:active': {
      boxSizing: "border-box",
      boxShadow: 'none',
      border: "1px solid rgba(45, 128, 226, 0.3)"
    },
    '&:disabled': {
      boxShadow: 'none',
      color: "#A7A7A7",
      border: "none",
      background: "#E2E2E2",
    },
  },
})(Button);


const TextButton = withStyles({
  root: {
    height: 40,
    boxSizing: "border-box",
    boxShadow: 'none',
    fontSize: 14,
    fontWeight: "Bold",
    padding: '12px 30px',
    minWidth: 120,
    // marginRight: 30,
    lineHeight: 1.5,
    backgroundColor: '#FFF',
    color: "#2D80E2",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      boxShadow: 'none',
      color: "white",
      border: "none",
      color: "#00D1FF", 
      backgroundColor: "white"
    },
    '&:active': {
      boxSizing: "border-box",
      boxShadow: 'none',
      backgroundColor: "white"
    },
    '&:disabled': {
      boxShadow: 'none',
      color: "#A7A7A7",
      backgroundColor: "white",

    },
  },
})(Button);




export default function CustomizedButtons() {
  // const classes = useStyles();

  return (
    <div>

      <PrimaryButton variant="contained" color="primary" onClick={() => console.log('clicked')}>
        PrimaryButton
      </PrimaryButton>
      <p></p>

      <SecondaryButton variant="contained" color="primary"  size="large">
        SecondaryButton
      </SecondaryButton>

      <p></p>
      <TextButton variant="contained" color="primary" disableRipple >
        TextButton
      </TextButton>
    </div>
  );
}
