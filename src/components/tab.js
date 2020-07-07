import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ThemeProvider,createMuiTheme  } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none", 
    fontSize: 14,
    "& .MuiTab-textColorPrimary":{
      color: "#383838"
    },
    "& .MuiTab-textColorPrimary.Mui-selected" :{
      color: theme.palette.primary.main
    }
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2D80E2"
    },
  }
})
export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          // centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    </ThemeProvider>
  );
}
