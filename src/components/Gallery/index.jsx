import React from "react";
import Styled from "./index.styled";
import Typography from "../Typography";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Gallery = ({ images }) => {
	return (
		<Styled.Gallery>
			<Styled.GalleryContainer>
				{images.map(image => (
					<Styled.GalleryThumb key={image.url} >
						<Styled.ThumbnailOverlay></Styled.ThumbnailOverlay>
						<Styled.ThumbnailImage
							src={`${image.url}`}
							alt={`${image.alt}`}
						/>
					</Styled.GalleryThumb>
				))}
			</Styled.GalleryContainer>
		</Styled.Gallery>
	);
};

export default Gallery;
