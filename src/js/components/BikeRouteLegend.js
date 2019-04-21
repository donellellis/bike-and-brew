import React, {Component} from 'react';

export default class BikeRouteLegend extends Component {
  render(){
    return(
      <table className="legend-bike-routes">
          <tr>
              <td>off street trail</td>
              <td className='legend-symbol legend-off-street-trail'>- - - -</td>
          </tr>
          <tr>
            <td>bike lane or sharrow</td>
            <td className='legend-symbol legend-bike-lane'>____</td>
          </tr>
          <tr>
            <td>recommended route</td>
            <td className='legend-symbol legend-rec-route'>____</td>
          </tr>
          <tr>
            <td className="legend-all">show all</td>
            <td></td>
          </tr>
      </table>
    )
  }
}
