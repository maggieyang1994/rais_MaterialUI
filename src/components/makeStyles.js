import React from 'react';
import { withStyles } from '@material-ui/styles'
const Nested = withStyles({
  root: {backgroundColor: 'red'}, // a style rule
  label: {color: 'white'}, // a nested style rule
})(({ classes }) => (
  <button className={classes.root}>
    <span className={classes.label}> // 'jss2 my-label'
      Nested
    </span>
  </button>
));

export default  function() {
  return <Nested classes={{ label: 'my-label' }} />
}

