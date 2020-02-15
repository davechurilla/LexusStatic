import styled from 'styled-components';
import breakpoint from '../../packages/breakpoints';

export default {
  ExploreCaroursel: styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    display: block;
    position: relative;
  `,
	VideoWrapper: styled.div`
		display: none;
	    ${breakpoint('desktop', 'up')}{
	      display: block;
	    }		
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
		display: block;
	`,
	Wrapper: styled.div`
		position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	`,
	ButtonWrapper: styled.div`
	    ${breakpoint('mobile')}{
	      display: inline-block;
	    }	
	`,
};