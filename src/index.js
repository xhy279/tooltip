import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';
import style from './style.css';

const App = () => {
  let content = 'Tooltip content!';
  return (
    <div className="tooltip">
      <Tooltip text={ content }>
        Hover over here
      </Tooltip> 
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));