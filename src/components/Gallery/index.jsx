import React from "react";
import Styled from "./index.styled";
import Typography from "../Typography";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Gallery = ({ thumbnails }) => {
	return (
		<Styled.Gallery>
			<Styled.GalleryContainer>
				<Styled.ImageThumbnail>
					{/*  */}
				</Styled.ImageThumbnail>
			</Styled.GalleryContainer>
		</Styled.Gallery>
	);
};

export default Gallery;
