import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		isShow: true
	}
	this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return ( 
      <div>
		  <div>
				<CSSTransition
					in={this.state.isShow}
					timeout={2000}
					classNames='boss-text'
					unmountOnExit
				>
					<div cla>Boss 人物孙悟空</div>
				</CSSTransition>
				<button onClick={this.toToggole}>{!this.state.isShow ? '召唤boss' : '隐藏boss'}</button>
		  </div>
	  </div>
     );
  }
  toToggole() {
	  this.setState({
		  isShow: !this.state.isShow
	  })
  }
}
 
export default Boss;