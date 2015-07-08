'use strict';

import React from 'react/addons';
import VictoryTree from '../src/victory-tree';

const App = React.createClass({

  render() {
    return (
      <div className="demo">
        < VictoryTree >
          component stuff goes here
        </ VictoryTree >
      </div>
    )
  }
});

const content = document.getElementById('content');

React.render(<App/>, content)
