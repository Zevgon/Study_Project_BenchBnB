import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount () {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    console.log(this.props.benches);
    if (this.props.benches) {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  componentWillReceiveProps () {
    if (this.props.benches) {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  render () {
    if (this.MarkerManager) {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
    return (
      <div id='map-container' ref='map'></div>
    );
  }
}

export default BenchMap;
