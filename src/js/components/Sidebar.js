import React, { Component } from 'react';

export default class Sidebar extends Component {
  displayName: 'Sidebar';

  render () {
    const {title, subtitle, location} = this.props;

    return (
      <div className='app-header'>
        <h1 className='app-title'>{title}</h1>
        <h2 className='app-subtitle'>{subtitle}</h2>
        <h3 className='app-location'>{location}</h3>
        <div className='app-legend'>
          <ul>
            <li>breweries</li>
          </ul>
        </div>
      </div>
    );
  }
}
