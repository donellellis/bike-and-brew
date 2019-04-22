import React, {Component} from 'react';

export default class BikeRouteLegend extends Component {
  handleSelectDefinitionExpression = (event) => {
    // console.log('clicked ' + event.target.id)
    this.props.toggleDefinitionExpression(event.target.id)
  }
  render(){
    return(
      <table className="legend-bike-routes">
          <tr>
              <td id="Route_Type = 'Off Street Trail'" onClick={this.handleSelectDefinitionExpression}>off street trail</td>
              <td className='legend-symbol legend-off-street-trail'>- - - -</td>
          </tr>
          <tr id="Route_Type = 'Bicycle Lane || Sharrow || Buffered Bike Lane || Protected Bike Lane'" onClick={this.handleSelectDefinitionExpression}>
            <td>bike lane or sharrow</td>
            <td className='legend-symbol legend-bike-lane'>____</td>
          </tr>
          <tr id="Route_Type = 'Recommended Route'" onClick={this.handleSelectDefinitionExpression}>
            <td>recommended route</td>
            <td className='legend-symbol legend-rec-route'>____</td>
          </tr>
          <tr id="null" onClick={this.handleSelectDefinitionExpression}>
            <td className="legend-all">show all</td>
            <td></td>
          </tr>
      </table>
    )
  }
}
