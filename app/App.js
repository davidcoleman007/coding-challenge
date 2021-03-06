import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import { ReactCommitActivityGrid } from './components/ReactCommitActivityGrid';

import store from './store';

export default class App extends React.Component {

  render () {

    return (
      <div className="container">
        <h2>Coding Challenge</h2>
        <img src="/images/git-graph.gif" alt="Git Graph" className="git-graph"/>
        <p>
          Create the graph above using this data:
          <br/>
          <a href="https://api.github.com/repos/facebook/react/stats/commit_activity">https://api.github.com/repos/facebook/react/stats/commit_activity</a>
        </p>
        <h3>Notes:</h3>
        <ul>
          <li>
            Commit color density should be relative to the highest single day activity and broken into 4 quarters.
          </li>
          <li>
            If the highest single days activity is 84, any day in the top 25% (63-84 commits) should have the highest density color.
          </li>
        </ul>
        <h3>Live component:</h3>
        <ReactCommitActivityGrid />
      </div>
    );

  }
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
