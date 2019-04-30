import React, { Component } from 'react';
import BikeRouteLegend from './BikeRouteLegend';

export default class Sidebar extends Component {
  displayName: 'Sidebar';
  constructor(props){
    super(props)
    this.state = {
      bikeRouteLegendIsHidden: true
    }
  }

  toggleBikeRouteLegend = () => {
    this.setState({
      bikeRouteLegendIsHidden: !this.state.bikeRouteLegendIsHidden
    })
  }

  render () {
    const {title, subtitle, location} = this.props;
    const {bikeRouteLegendIsHidden} = this.state;

    return (
      <div className='app-header'>
        <h1 className='app-title'>{title}</h1>
        <h2 className='app-subtitle'>{subtitle}</h2>
        <h3 className='app-location'>{location}</h3>
        <table className='app-legend'>
          <tr>
            <td>breweries</td>
            <td>
              <img src="https://i.imgur.com/7HQd1S8.png" alt="beer glass"></img>
            </td>
          </tr>
          <tr>
            <td>w&od</td>
            <td className='legend-symbol legend-wod'>__</td>
          </tr>
          <tr>
            <td>primary trail</td>
            <td className='legend-symbol legend-primary-trail'>__</td>
          </tr>
          <tr>
            <td 
            className="legend-bike-routes-title" 
            onClick={this.toggleBikeRouteLegend}
            >
              <h4>bike routes</h4>
              <p >click to expand and filter by type</p>
            </td>
            <td></td>
          </tr>
        </table>
        { !bikeRouteLegendIsHidden && <BikeRouteLegend currentDefinitionExpression={this.props.currentDefinitionExpression} toggleDefinitionExpression={this.props.toggleDefinitionExpression}/>}
      </div>
    );
  }
}
