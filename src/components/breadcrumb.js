import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ThemeProvider,createMuiTheme  } from '@material-ui/core/styles';
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008AE2"
    },
  }
})
export default function SimpleBreadcrumbs() {
  return (
    <ThemeProvider theme={theme}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" color="primary"/>} aria-label="breadcrumb">
        <Link color="primary" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="primary" href="/getting-started/installation/" onClick={handleClick}>
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </ThemeProvider>
  );
}
