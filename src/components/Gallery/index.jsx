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
							</Styled.ThumbOrigin>
						</Styled.GalleryThumb>
						<br />
					</React.Fragment>
				))}
			</Styled.GalleryContainer>
		</Styled.Gallery>
	);
};

export default Gallery;
