import MapView from 'js/components/MapView';
import React, { Component } from 'react';

export default class App extends Component {
  displayName: 'App';

  render () {
    return (
      <div>
        <MapView />
      </div>
    );
  }
}
