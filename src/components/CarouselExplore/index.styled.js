import styled from "styled-components";
import breakpoint from "../../packages/breakpoints";

export default {
  ExploreCarousel: styled.div`
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
    left: 0;
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
      transform: translate(-50%, 0);
      z-index: 2;
    }
  `,
  Heading: styled.h2`
    font-size: 18px;
    line-height: 1.3em;
    margin: 1.5em 0 0.5em;
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
  `,
  CarouselNav: styled.ul`
    display: none;
    ${breakpoint("desktop", "up")} {
      display: block;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 2;
      display: flex;
      flex-deirection: row;
      top: 130px;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  `,
  CarouselNavLi: styled.li`
    margin: 0;
    padding: 0;
    position: relative;
    border-right: 1px dotted white;
    :last-child {
      border-right: none;
    }
    &.active:after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 50%;
      margin-left: -5px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7px 5px 0 5px;
      border-color: #fff transparent transparent transparent;
    }
  `,
  CarouselNavItem: styled.button`
    font-famiy: "nobel-bold", Helvetica, Arial, sans-serif;
    color: white;
    text-decoration: none;
    padding: 0 2rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    line-height: 2.1rem;
    background: transparent;
    outline: none;
    border: none;
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
    padding: 2rem 1.5rem 0;
    ${breakpoint("tablet")} {
      padding: 2rem 4rem 0;
    }
    ${breakpoint("desktop", "up")} {
      display: none;
    }
  `,
  ResponsiveContent: styled.div`
    margin: 0;
    padding: 0;
  `,
  TabletOnly: styled.img`
    display: none;
    width: 100%;
    ${breakpoint("tablet")} {
      display: block;
    }
  `,
  MobileOnly: styled.img`
    display: none;
    width: 100%;
    ${breakpoint("mobile")} {
      display: block;
    }
  `,
  SlideContent: styled.div`
    bottom: 0;
    height: auto;
    top: auto;
    z-index: 2;
    color: white;
    width: 100%;
    position: absolute;
    text-align: left;
    padding: 0 60px;
    ${breakpoint("desktop", "up")} {
      box-sizing: border-box;
    }
  `,
  ContentInner: styled.div`
    position: relative;
    top: 0;
    transform: none;
    color: white;
    padding: 2vw;
    ${breakpoint("desktop", "up")} {
      max-width: 542px;
      padding: 6vw;
      box-sizing: border-box;
    }
    ${breakpoint("mobile")} {
      border-bottom: 1px solid #eee;
    }
  `,
  VideoTitle: styled.div`
		padding-top: 20px;
		${breakpoint("desktop", "up")}{
			padding-top: 20px;
	`,
  Title: styled.h3`
    font-family: "nobel-bold", Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    line-height: 0.9em;
    font-weight: 400;
    margin: 35px 0 20px;
    ${breakpoint("desktop", "up")} {
      font-family: "nobel-bold", Helvetica, Arial, sans-serif;
      margin-bottom: 1.5em;
    }
  `,
  BodyCopy: styled.p`
    font-family: "Palatino", "Palatino Linotype", "Book Antiqua", serif;
    font-weight: normal;
    font-size: 14px;
    margin: 1em 0;
    text-transform: none;
    line-height: 1.35em;
    ${breakpoint("tablet", "up")} {
      font-size: 18px;
    }
    ${breakpoint("desktop", "up")} {
      font-family: "nobel-regular", Helvetica, Arial, sans-serif;
    }
  `,
  H4: styled.h4`
    font-size: 0.8rem;
    line-height: 0.82em;
    font-weight: 400;
    margin: 1% 0;
    ${breakpoint("tablet")} {
      font-size: 1rem;
    }
    ${breakpoint("desktop", "up")} {
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
    margin: 1.5em 0.25em 0.9em 0;
    padding: 1.2em;
    letter-spacing: 2px;
    border: 2px solid white;
    text-decoration: none;
    position: relative;
    display: inline-block;
    ${breakpoint("tablet", "up")} {
      margin: 1.5em 1.25em 0.75em 0;
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
    ${breakpoint("desktop", "up")} {
      display: block;
    }
  `,
  MobileDisclaimer: styled.div`
    position: relative;
    z-index: 1110;
    display: block;
    ${breakpoint("desktop", "up")} {
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
    font-family: "Palatino", "Palatino Linotype", "Book Antiqua", serif;
  `
};
