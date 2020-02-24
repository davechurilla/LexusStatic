import styled from "styled-components";
import breakpoint from "../../packages/breakpoints";

export default {
	Gallery: styled.div`
		margin: 0 auto;
		padding: 0;
		border: 0;
		max-width: 640px;
		font-size: 100%;
		${breakpoint("tablet", "up")} {
			// 
		}
	`,
	GalleryContainer: styled.div`
		display: flex;
		flex-wrap: wrap;
		&:hover > div > div {
			background: rgba(0, 0, 0, 0.5);
		}
		&:hover > div > div:hover {
			background: rgba(0, 0, 0, 0);
		}				
	`,
	GalleryThumb: styled.div`
		width: 50% !important;
		margin: 0 !important;
		height: auto !important;
		display: inline-block;
		position: relative;
		vertical-align: top;
		z-index: 1;
		overflow: hidden;
		cursor: pointer;					
		&:hover img {
			transform: scale(1.2);
		}		
		${breakpoint("tablet", "up")} {
			// 
		}
	`,
	ThumbnailImage: styled.img`
		max-width: 100%;
		width: 100%;
		display: block;
		transition: all 60ms linear;
		transition: transform .5s ease;
	`,
	ThumbnailOverlay: styled.div`
		position: absolute;
		width: 100%;
		height: 100%;
		display: block;
		z-index: 2;	
		transition: all .5s ease;
	`
};
