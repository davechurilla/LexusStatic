import React from "react";
import Styled from "./index.styled";
import {
  MobileBreakpoint,
  TabletBreakpoint,
  useMobileBreakpoint,
} from '../../packages/breakpoints';
import Typography from "../Typography";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Gallery = ({ images }) => {

	function PlayButton(props) {
		const hasPlayButton = props.hasPlayButton
		if(hasPlayButton) {
			return <Styled.HasPlayButton />
		}
		return null
	} 

	return (
		<Styled.Gallery>
			<Styled.GalleryContainer>
				{images.map(image => (
					<React.Fragment key={image.thumbnail}>
						<Styled.GalleryThumb>
							<Styled.ThumbOrigin>
								<Styled.ThumbnailOverlay></Styled.ThumbnailOverlay>
								<Styled.ThumbnailImage
									src={`${image.thumbnail}`}
									alt={`${image.alt}`}
								/>
								<PlayButton hasPlayButton = {image.playbutton} />
							</Styled.ThumbOrigin>
						</Styled.GalleryThumb>
						<Styled.ThumbLineBreak />
					</React.Fragment>
				))}
			</Styled.GalleryContainer>
		</Styled.Gallery>
	);
};

export default Gallery;
