import { MAP_OPTIONS, VIEW_OPTIONS } from 'js/config';
import LocateModal from 'js/components/modals/Locate';
import ShareModal from 'js/components/modals/Share';
import Spinner from 'js/components/shared/Spinner';
import Controls from 'js/components/Controls';
import MapView from 'esri/views/MapView';
import FeatureLayer from 'esri/layers/FeatureLayer';
import React, { Component } from 'react';
import EsriMap from 'esri/Map';

export default class Map extends Component {
  displayName: 'Map';

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      shareModalVisible: false,
      locateModalVisible: false,
      view: {}
    };
  }

  componentDidMount() {
    const map = new EsriMap(MAP_OPTIONS);

    // Create our map view
    const promise = new MapView({
      container: this.refs.mapView,
      map: map,
      ...VIEW_OPTIONS
    });

    promise.when(view => {
      this.setState({
        view: view
      });

    });
    // Now that we have created our Map and Mapview, here is where we would add some layers!
    // see https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=layers-featurelayer for an example!

    const bikeTrailVirginiaRenderer = {
      "type": "unique-value",
      "field": "Bike_Route_Name",
      "uniqueValueInfos": [
        {
          "value": "Washington & Old Dominion Trail",
          "symbol": {
            "color": "#FCF6B1", //light yellow
            "width": 4,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Washington & Old Dominion Trail"
        },
        {
          "value": "Mount Vernon Trail",
          "symbol": {
            "color": "#F7B32B",//dark yellow
            "width": 3,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Mount Vernon Trail"
        },
        {
          "value": "Custis Trail",
          "symbol": {
            "color": "#F7B32B",//dark yellow
            "width": 3,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Custis Trail"
        }
      ]
    }

    const bikeTrailFacilityVirginiaRenderer = {
      "type": "unique-value",
      "field": "Facility_Name",
      "uniqueValueInfos": [
        {
          "value": "Four Mile Run Trail",
          "symbol": {
            "color": "#F7B32B",//dark yellow
            "width": 2.5,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Four Mile Run Trail"
        },
        {
          "value": "Shirlington Connector",
          "symbol": {
            "color": "#F7B32B",//dark yellow
            "width": 2.5,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Shirlington Connector"
        }
      ]
    }

    const bikeTrailArlingtonRenderer = {
      "type": "unique-value",
      "field": "Route_Type",
      "uniqueValueInfos": [
        {
          "value": "Recommended Route",
          "symbol": {
            "color": "#C5283D", //medium pink
            "width": .5,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Recommended Route"
        },
        {
          "value": "Off Street Trail",
          "symbol": {
            "color": "#F7B32B",//dark yellow
            "width": 1,
            "type": "simple-line",
            "style": "dot"
          },
          "label": "Off Street Trail"
        },
        {
          "value": "Bicycle Lane",
          "symbol": {
            "color": "#FAA275", //light pink
            "width": 1.5,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Bicycle Lane"
        },
        {
          "value": "Sharrow",
          "symbol": {
            "color": "#FAA275", //light pink
            "width": 1.5,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Sharrow"
        },
        {
          "value": "Buffered Bike Lane",
          "symbol": {
            "color": "#FAA275", //light pink
            "width": 1.5,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Buffered Bike Lane"
        },
        {
          "value": "Protected Bike Lane",
          "symbol": {
            "color": "#FAA275", //light pink
            "width": 1.5,
            "type": "simple-line",
            "style": "solid"
          },
          "label": "Protected Bike Lane"
        }
      ]
    }

    //adds symbol for breweries
    const breweriesVirginiaRenderer = {
      "type": "simple",
      "symbol": {
        "type": "picture-marker",
        "url": "https://i.imgur.com/7HQd1S8.png",
        "width": 25,
        "height": 25
      }
    }

    const bikeTrailVirginia = new FeatureLayer({
      url: "https://services.arcgis.com/p5v98VHDX9Atv3l7/arcgis/rest/services/Bicycle_Facility_Inventory_(view)/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
      renderer: bikeTrailVirginiaRenderer
    })

    const bikeTrailFacilitiyVirginia = new FeatureLayer({
      url: "https://services.arcgis.com/p5v98VHDX9Atv3l7/arcgis/rest/services/Bicycle_Facility_Inventory_(view)/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
      renderer: bikeTrailFacilityVirginiaRenderer
    })

    const bikeTrailArlington = new FeatureLayer({
      url: "https://gis2.arlingtonva.us/arlgis/rest/services/Open_Data/od_Bike_Route_Lines/FeatureServer/0/query?where=1%3D1&outFields=Route_Type,Label&outSR=4326&f=json",
      renderer: bikeTrailArlingtonRenderer
    })

    const breweriesVirginia = new FeatureLayer({
      url: "https://maps.vedp.org/arcgis/rest/services/OpenData/OpenDataLayers/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json",
      renderer: breweriesVirginiaRenderer
    })

    map.add(bikeTrailArlington)
    map.add(bikeTrailFacilitiyVirginia)
    map.add(bikeTrailVirginia)
    map.add(breweriesVirginia)

  }

  toggleLocateModal = () => {
    this.setState({locateModalVisible: !this.state.locateModalVisible});
  }

  toggleShareModal = () => {
    this.setState({shareModalVisible: !this.state.shareModalVisible});
  }

  render () {
    const {shareModalVisible, locateModalVisible, view} = this.state;

    return (
      <div ref='mapView' className='map-view'>
        <ShareModal visible={shareModalVisible} toggleShareModal={this.toggleShareModal} />
        <LocateModal visible={locateModalVisible} toggleLocateModal={this.toggleLocateModal} />
        <Controls view={view} toggleShareModal={this.toggleShareModal} toggleLocateModal={this.toggleLocateModal} />
        <Spinner active={!view.ready} />
      </div>
    );
  }
}
