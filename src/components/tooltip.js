import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#4f5460',
    color: '#FFF',
    fontSize: 11,
    padding: "5px 10px",
    maxWidth: 300,
    lineHeight: "22px",
    textAlign: "left", 
    backgroundColor: "#4F5460", 
    opacity: 0.9
  },
}))(Tooltip);

const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return <div {...props} ref={ref}>Bin</div>
});

// ...
export default function CustomizedTooltips() {
  return (
    <div>
      <HtmlTooltip
        // open
        title={
          // <React.Fragment>
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          // </React.Fragment>
        }
      >
        <MyComponent/>
      </HtmlTooltip>

      {/* <HtmlTooltip
        // open
        title={
          <React.Fragment>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
      <HtmlTooltip
        // open
        title="Lorem ipsum dolor"
      >
        <Button>HTML</Button>
      </HtmlTooltip> */}
    </div>
  )
}