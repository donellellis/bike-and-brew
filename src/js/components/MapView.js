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

    const bikeTrailArlington = new FeatureLayer({
      url: "https://gis2.arlingtonva.us/arlgis/rest/services/Open_Data/od_Bike_Route_Lines/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    })

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

    const breweriesVirginia = new FeatureLayer({
      url: "https://maps.vedp.org/arcgis/rest/services/OpenData/OpenDataLayers/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json",
      renderer: breweriesVirginiaRenderer
    })

    map.add(bikeTrailArlington)
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
