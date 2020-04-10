import React, { Component } from 'react';
import ExploreCarousel from './components/CarouselExplore'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // oldSlide: 0,
      // activeIndex: 0
    };
  } 
  render() {

  return (
    <div className="App" {...this.props}>
      <ExploreCarousel {...this.props.slides} />
    </div>
  );
}
}

