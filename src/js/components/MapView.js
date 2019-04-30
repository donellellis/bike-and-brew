import { MAP_OPTIONS, VIEW_OPTIONS, TEXT } from 'js/config';
import LocateModal from 'js/components/modals/Locate';
import ShareModal from 'js/components/modals/Share';
import Spinner from 'js/components/shared/Spinner';
import Controls from 'js/components/Controls';
import MapView from 'esri/views/MapView';
import Sidebar from './Sidebar';
import FeatureLayer from 'esri/layers/FeatureLayer';
import React, { Component } from 'react';
import EsriMap from 'esri/Map';
import { bikeTrailVirginiaRenderer, bikeTrailArlingtonRenderer, breweriesVirginiaRenderer} from './featureLayer/renderer'
import { popupBreweriesVirginia, popupBikeTrailVirginia, popupBikeTrailArlington } from './featureLayer/popup'

export default class Map extends Component {
  displayName: 'Map';

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      shareModalVisible: false,
      locateModalVisible: false,
      view: {},
      currentDefinitionExpression: null
    }


    // this.bikeTrailArlington = new FeatureLayer({
    //   url: "https://gis2.arlingtonva.us/arlgis/rest/services/Open_Data/od_Bike_Route_Lines/FeatureServer/0/query?where=1%3D1&outFields=Route_Type,Label&outSR=4326&f=json",
    //   renderer: bikeTrailArlingtonRenderer,
    //   outFields: ["Route_Type"],
    //   popupTemplate: popupBikeTrailArlington,
    //   definitionExpression: this.state.currentDefinitionExpression
    // })
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

    const bikeTrailVirginia = new FeatureLayer({
      url: "https://services.arcgis.com/p5v98VHDX9Atv3l7/arcgis/rest/services/Bicycle_Facility_Inventory_(view)/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
      renderer: bikeTrailVirginiaRenderer,
      outFields: ["Facility_Name"],
      popupTemplate: popupBikeTrailVirginia
    })

    const breweriesVirginia = new FeatureLayer({
      url: "https://maps.vedp.org/arcgis/rest/services/OpenData/OpenDataLayers/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json",
      renderer: breweriesVirginiaRenderer,
      outFields:["Trade_Name", "Address", "Trade_Phon"],
      popupTemplate: popupBreweriesVirginia
    })

    this.bikeTrailArlington = new FeatureLayer({
      url: "https://gis2.arlingtonva.us/arlgis/rest/services/Open_Data/od_Bike_Route_Lines/FeatureServer/0/query?where=1%3D1&outFields=Route_Type,Label&outSR=4326&f=json",
      renderer: bikeTrailArlingtonRenderer,
      outFields: ["Route_Type"],
      popupTemplate: popupBikeTrailArlington,
      definitionExpression: this.state.currentDefinitionExpression
    })

    map.add(this.bikeTrailArlington)
    map.add(bikeTrailVirginia)
    map.add(breweriesVirginia)

  }

  toggleDefinitionExpression = (currentDefinitionExpression) => {
    this.setState({
      currentDefinitionExpression
    }, () => {
      this.bikeTrailArlington.definitionExpression = currentDefinitionExpression
    })
          // this.bikeTrailArlington.definitionExpression = currentDefinitionExpression

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
      <div className='root'>
        <Sidebar currentDefinitionExpression={this.state.currentDefinitionExpression} title={TEXT.title} subtitle={TEXT.subtitle} location={TEXT.location} toggleDefinitionExpression={this.toggleDefinitionExpression}/>
        <div ref='mapView' className='map-view'>
          <ShareModal visible={shareModalVisible} toggleShareModal={this.toggleShareModal} />
          <LocateModal visible={locateModalVisible} toggleLocateModal={this.toggleLocateModal} />
          <Controls view={view} toggleShareModal={this.toggleShareModal} toggleLocateModal={this.toggleLocateModal} />
          <Spinner active={!view.ready} />
        </div>
      </div>
    );
  }
}
