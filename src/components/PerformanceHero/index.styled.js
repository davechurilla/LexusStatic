import styled from "styled-components";

export default {
	PerformanceHero: styled.div`
		font-family: "nobel-regular",Helvetica,Arial,sans-serif;
	    text-transform: uppercase;
	    font-weight: normal;
		padding: 10px;
		border: 1px solid black;
		display: inline-block;
	`,
	SectionHero: styled.div`
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	`,
	VideoContent: styled.div`
		bottom: 0;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    left: 0;
	    position: absolute;
	    right: 0;
	    top: 0;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -webkit-box-pack: end;
	    -ms-flex-pack: end;
	    justify-content: flex-end;
	    z-index: 1101;
	    color: white;
	    padding: 108px 0 108px 140px;
	`,	
	Title: styled.h1`
    	font-size: 5rem;
	    line-height: .9em;
	    font-weight: 400;
	    margin: 0;
	`,
	H4: styled.h4`
    	font-size: 2rem;
	    line-height: .82em;
	    font-weight: 400;
	`,
	Button: styled.button`
		  background: ${props => props.primary ? "transparent" : "white"};
		  color: ${props => props.primary ? "white" : "black"};
		  font-size: 1em;
		  margin: 1em 0.75em 2em 0;
		  padding: 0.5em 1em;
		  border: 2px solid white;
		  text-decoration: none;
		  &:hover {
		  	background: black;
		    color: white;
		  }		  
	`,		
};