import React from 'react';
import Portal from './Portal';

class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false,
    };
    
    this.width = props.width || 200;
    
  }
  
  showTooltip = () => {
    const style = { width: this.width }; 
    const dimensions = this.el.getBoundingClientRect(); 
    
    // center align the tooltip 
    style.left = (dimensions.left + (dimensions.width / 2)) - (this.width / 2);
    style.bottom = (window.innerHeight - dimensions.top);
    
    this.setState({
      visible: true,
      style,
    });
  }
  
  hideTooltip= () => {
    this.setState({
      visible: false
    });
  }
  
  render() {
    return (
      <span 
        onMouseOver={this.showTooltip}
        onMouseOut={this.hideTooltip}
        ref={el => this.el = el}
      >
        {this.props.children}
        
        {this.state.visible && (
          <Portal>
            <div 
              className="tooltip-text"
              style={this.state.style}
            >
              {this.props.text}
            </div>
          </Portal>
        )}
      </span>
    );
  }
}

export default Tooltip;