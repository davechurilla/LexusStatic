import React, { Component } from "react";
import Styled from "./index.styled";
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Poster, Posters } from './Poster';
import {
  MobileBreakpoint,
  TabletBreakpoint,
  useMobileBreakpoint
} from "../../packages/breakpoints";
import Typography from "../Typography";

export default class Gallery extends Component {
	state = {
		selectedIndex: 0,
		lightboxIsOpen: false,
		video: false
	};
	toggleLightbox = (selectedIndex, video) => {
		this.setState(state => ({
			lightboxIsOpen: !this.state.lightboxIsOpen,
			selectedIndex,
			video
		}));
	};

  render() {
		const { lightboxIsOpen, selectedIndex } = this.state;
		const props = this.props

    function PlayButton(props) {
      const hasPlayButton = props.hasPlayButton;
      if (hasPlayButton) {
        return <Styled.HasPlayButton />;
      }
      return null;
    }

    return (
      <Styled.Gallery {...props}>
        <Styled.GalleryContainer>
          {props.images.map((image, j) => (
            <React.Fragment key={image.thumbnail}>
              <Styled.GalleryThumb onClick={() => this.toggleLightbox(j, image.playbutton)}>
                <Styled.ThumbOrigin>
                  <Styled.ThumbnailOverlay></Styled.ThumbnailOverlay>
                  <Styled.ThumbnailImage
                    src={`${image.thumbnail}`}
                    alt={`${image.alt}`}
                  />
                  <PlayButton hasPlayButton={image.playbutton} />
                </Styled.ThumbOrigin>
              </Styled.GalleryThumb>
              <Styled.ThumbLineBreak />
            </React.Fragment>
          ))}
        </Styled.GalleryContainer>
				<Posters>
          {this.props.videos.map((vid, idx) => (
            <Poster
              key={idx}
              data={vid}
              onClick={() => this.toggleLightbox(idx)}
            />
          ))}
        </Posters>
        <ModalGateway>
          {this.state.lightboxIsOpen ? (
						<Modal 
						onClose={this.toggleLightbox}
						allowFullscreen = {false}
						>
              {this.state.video === true ?
							<Carousel
                currentIndex={this.state.selectedIndex}
                frameProps={{ autoSize: 'height' }}
								views={this.props.videos} 
							/> :
							<Carousel
							currentIndex={this.state.selectedIndex}
							frameProps={{ autoSize: 'height' }}
							views={this.props.images}
							/>
							}
            </Modal>
          ) : null}
        </ModalGateway>		
      </Styled.Gallery>
    );
  }
}
