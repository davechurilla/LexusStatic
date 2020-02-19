import styled from 'styled-components';
import breakpoint from '../../packages/breakpoints';

export default {
	ExploreCaroursel: styled.div`
		font-family: "nobel-regular", Helvetica, Arial, sans-serif;
		display: block;
		position: relative;
		background: black;
		${breakpoint("desktop", "up")} {
			background: transparent;
		}
  `,
	VideoWrapper: styled.div`
		position: relative;	
		display: block;
	`,
	BackupImage: styled.img`
		position: absolute;
		left:0;
		top: 0;
		display: block;
	`,
	BackgroundVideo: styled.video`
		width: 100%;
		object-fit: cover;		
		display: none;
		display: block;
	`,
	HeadingComponent: styled.div`
		text-align: center;
		color: white;
		${breakpoint("desktop", "up")} {
			position: absolute;
			left: 50%;
			transform: translate(-50%,0);
			z-index:2;
		}		
	`,
	Heading: styled.h2`
		font-size: 18px;
		line-height: 1.3em;
		margin: 1.5em 0 .5em;
		letter-spacing: 1px;
		font-family: "nobel-book", Helvetica, Arial, sans-serif;
		text-transform: uppercase;
		font-weight: 300;
		${breakpoint("tablet", "up")} {
			font-size: 28px;
		}
	`,
	Divider: styled.div`
		background-color: currentColor;
		display: inline-block;
		height: 1px;
		margin: 10px 0;
		width: 50px;
		${breakpoint("tablet", "up")} {
			// width: 50px;
		}
	`,	
	Wrapper: styled.div`
		position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	`,
	ButtonWrapper: styled.div`
		display: inline-block;
	`,
	ResponsiveContainer: styled.div`
		background: black;
		text-align: center;
		display: block;
		${breakpoint('desktop', 'up')}{
			display: none;
		}			
	`,
	ResponsiveContent: styled.div`
		
	`,
	TabletOnly: styled.img`
	display: none;
	width: 100%;
	${breakpoint('tablet')}{
	  display: block;
	}			
	`,
	MobileOnly: styled.img`
		display: none;
		width: 100%;
		${breakpoint('mobile')}{
		display: block;
		}			
	`,	
	SlideContent: styled.div`
		bottom: 0;
		height: auto;
		top: auto;
		z-index: 2;
		// min-width: 641px		
		color: white;
		width: 100%;
		position: absolute;
		text-align: left;
		// min-width: 1025px
		padding: 0 60px; 		
	`,
	ContentInner: styled.div `
		position: relative;
		top: 0;
		transform: none;
		padding: 10px 0;
		padding: 6vw;
		color: white;
	    ${breakpoint('desktop', 'up')}{
			max-width: 542px;
			box-sizing: border-box;
		}				
	`,
	VideoTitle: styled.div `
		// padding-bottom: 5px;
	`,
	Title: styled.h3`
		font-family: "nobel-bold", Helvetica, Arial, sans-serif;
		font-size: 1.4rem;
		line-height: 0.9em;
		font-weight: 400;
		margin: 0;
	    ${breakpoint('tablet', 'up')}{
				font-family: "nobel-bold", Helvetica, Arial, sans-serif;
				margin-bottom: 1.5em;
	    }	
	`,
	BodyCopy: styled.p`
		font-family: "Palatino","Palatino Linotype","Book Antiqua",serif;
		font-weight: normal;
		font-size: 14px;
		margin-bottom: 24px;
		text-transform: none;
		line-height: 1.35em;
		${breakpoint('tablet', 'up')}{
			font-size: 18px;
		}			
		${breakpoint('desktop', 'up')}{
			font-family: "nobel-regular", Helvetica, Arial, sans-serif;
		}				
		
	`,
	H4: styled.h4`
		font-size: 0.8rem;
		line-height: 0.82em;
		font-weight: 400;
		margin: 1% 0;
	    ${breakpoint('tablet')}{
	      font-size: 1rem;
	    }		
	    ${breakpoint('desktop', 'up')}{
	      font-size: 2rem;
	    }			
	`,
	Button: styled.button`
		background: ${props => (props.primary ? "transparent" : "white")};
		color: ${props => (props.primary ? "white" : "black")};
		font-size: 12px;
		font-family: "nobel-bold", Helvetica, Arial, sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		margin: 0 0.25em 0 0;
		padding: 1.2em;
		letter-spacing: 2px;
		border: 2px solid white;
		text-decoration: none;
		position: relative;
		display: inline-block;
	    ${breakpoint('tablet', 'up')}{
				margin: 0 1.25em 0 0;
	    }			
		&:hover {
			background: black;
			color: white;
		}
		&:hover:before {
			background: white;
			color: black;
		}
	`,
	Disclaimer: styled.div`
		position: relative;
	    z-index: 1110;
	    display: none;	
	    ${breakpoint('desktop', 'up')}{
	      	display: block;
	    }	    	
	`,
	MobileDisclaimer: styled.div`
		position: relative;
	    z-index: 1110;
	    display: block;
	    ${breakpoint('desktop', 'up')}{
	      	display: none;
	    }	    	
	`,	
	DisclaimerContainer: styled.div`
		right: 5px;
	    padding-left: 10px;
	    text-align: right;
	    font-size: 10px;
	    bottom: 5px;
	    font-size: 9px;
	    line-height: 1.2em;
	    position: absolute;	
	    color: white;
        font-family: "Palatino","Palatino Linotype","Book Antiqua",serif;
        text-transform: none;
	`,	
};