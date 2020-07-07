import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import copy from 'copy-to-clipboard';


export default class TransitionsPopper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      classes: makeStyles(theme => ({
        paper: {
          border: "1px solid",
          padding: theme.spacing(1),
          backgroundColor: theme.palette.background.paper

        }
      })),
      popperCotent: null
    }
  }



  handleClick = (event, type) => {
    console.log(type)
    this.setState({
      open: !this.state.open,
      anchorEl:  this.state.anchorEl ? null : event.currentTarget,
      popperCotent:  type === 'popper1' ? this.popper1Render() : this.popper2Render()
    })
  };
  handleLeave(){
    this.setState({
      open: false,
      anchorEl: null,
      popperCotent: null
    })
  }
  popper1Render() {
    return (
      <div>this is popper1</div>
    )
  }
  popper2Render() {
    return (
      <div>this is popper2</div>
    )
  }
  handleCopy() {
    console.log('coppy')
    copy(`
      hello
      world
    `);
    // copy(`
    //   <div>
    //    <div>hello</div>
    //    <div>world</div>
    //   </div>
    // `, {
    //   // debug: true,
    //   // message: 'Press #{key} to copy',
    //   format: "text/html"
    // });
  }
  render() {
    return (
      <div>
        <div style={{ marginBottom: 100 + 'px' }}>
          <button type="button" onClick={this.handleCopy.bind(this)} onMouseEnter={(e) => this.handleClick.call(this, e, 'popper1')} onMouseLeave={this.handleLeave.bind(this)}>
            Toggle Popper1
        </button>
        </div>

        <div>
          <button type="button" onMouseEnter={(e) => this.handleClick.call(this, e, 'popper2')} onMouseLeave={this.handleLeave.bind(this)}>
            Toggle Popper2
        </button>
        </div>

        <div style={{ position: "absolute" }}>
          <Popper open={this.state.open} anchorEl={this.state.anchorEl} transition placement="bottom-end">
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={this.state.classes.paper} >{this.state.popperCotent}</div>
              </Fade>
            )}
          </Popper>
        </div>
      </div>
    )
  }
  ;
}
