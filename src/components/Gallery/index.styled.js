import styled from "styled-components";
import breakpoint from "../../packages/breakpoints";

export default {
	Gallery: styled.div`
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		background: #000;
		${breakpoint("tablet", "up")} {
			// 
		}
	`,
	GalleryContainer: styled.div`
		display: flex;
		flex-wrap: wrap;
	`,
	ImageThumbnail: styled.img`
		width: 50% !important;
		margin: 0 !important;
		height: auto !important;
		display: inline-block;
		position: relative;
		vertical-align: top;
    z-index: 1;
		${breakpoint("tablet", "up")} {
			// 
		}
	`
};
