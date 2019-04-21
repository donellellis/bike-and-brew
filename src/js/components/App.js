import MapView from 'js/components/MapView';
import Sidebar from 'js/components/Sidebar';
import React, { Component } from 'react';
import { TEXT } from 'js/config';

export default class App extends Component {
  displayName: 'App';

  render () {
    return (
      <div className='root'>
        <Sidebar title={TEXT.title} subtitle={TEXT.subtitle} location={TEXT.location}/>
        <MapView />
      </div>
    );
  }

}
