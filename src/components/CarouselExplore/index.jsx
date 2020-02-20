import React, { Component } from "react";
import Styled from "./index.styled";
import Slider from "react-slick";

import Typography from "../Typography";
import {
  MobileBreakpoint,
  TabletBreakpoint,
  useMobileBreakpoint,
} from '../../packages/breakpoints';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Custom styles
import './styles.css';

	export default class ExploreCaroursel extends Component {
		constructor(props) {
			super(props); 
			this.props = props;
			this.state = {
				activeIndex: 0,
				slideIndex:0
			};		
		}

		handleClick = (e, id) => {
			e.preventDefault();
			const slide = Object.values(id)[0];
			this.setState({ activeIndex: slide })
			this.slider.slickGoTo(slide)
		}

		render() {
			const settings = {
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				responsive: [
					{
						breakpoint: 1200,
						settings: "unslick"					
					}

				],
				afterChange: current => this.setState({ activeIndex: current })				
			};
			
			const NavItems = () => this.props.navItems.map(({text, id, ...navitem}) => 	
				<Styled.CarouselNavLi  key={text} className={ this.state.activeIndex === id ? 'active' : '' }>
					<Styled.CarouselNavItem {...navitem} onClick={(e) => this.handleClick(e, {id})} key={text} >
						{text}
					</Styled.CarouselNavItem>
				</Styled.CarouselNavLi>
			);			
			const CtaItems = () => this.props.ctas.map(({url, text, ...cta}) => 	
				<Styled.Button {...cta} as="a" href={`${url}`} key={text}>
					{text}
				</Styled.Button>
			);			
			return (
				<Styled.ExploreCaroursel {...this.props}l>		
					<Styled.HeadingComponent>
						<Styled.Heading>{this.props.heading}</Styled.Heading>
						<Styled.Divider></Styled.Divider>
					</Styled.HeadingComponent>
					<Styled.CarouselNav>
							<NavItems />
					</Styled.CarouselNav>											
					<Slider ref={slider => (this.slider = slider)} {...settings}>
						<Styled.VideoWrapper>
							<Styled.BackgroundVideo autoPlay muted loop poster={`${this.props.backupImg.url}`}>
								<source 
									src="https://www.lexus.com/media/performance/Lexus-Performance-LC_1280x720.mp4"
									type="video/mp4" />
								<source 
									src="https://www.lexus.com/media/performance/Lexus-Performance-LC_1280x720.mp4"
									type="video/webm" />
							</Styled.BackgroundVideo>																
							<Styled.SlideContent>
								<Styled.ContentInner>
									<Styled.VideoTitle>
										<div>
											<Styled.Title>{this.props.headline}</Styled.Title>
											<Styled.BodyCopy>{this.props.bodycopy}</Styled.BodyCopy>
										</div>
									</Styled.VideoTitle>
									<CtaItems />
								</Styled.ContentInner>
							</Styled.SlideContent>
							<Styled.Disclaimer>
								<Styled.DisclaimerContainer>
									<span>{this.props.disclaimer}</span>
								</Styled.DisclaimerContainer>
							</Styled.Disclaimer>																
						</Styled.VideoWrapper>			
						<Styled.VideoWrapper>
							<Styled.BackgroundVideo autoPlay muted loop poster="">
								<source 
									src="https://www.lexus.com/media/performance/PerfRCF1.mp4"
									type="video/mp4" />
								<source 
									src="https://www.lexus.com/media/performance/PerfRCF1.webm"
									type="video/webm" />
							</Styled.BackgroundVideo>
						</Styled.VideoWrapper>	
						<Styled.VideoWrapper>
							<Styled.BackgroundVideo autoPlay muted loop poster="">
								<source 
									src="https://www.lexus.com/media/performance/Lexus-Performance-GS_F_1280x720.mp4"
									type="video/mp4" />
								<source 
									src="https://www.lexus.com/media/performance/Lexus-Performance-GS_F_1280x720.webm"
									type="video/webm" />
							</Styled.BackgroundVideo>
						</Styled.VideoWrapper>																
					</Slider>
					{/* end of carousel, mobile content */}
					<Styled.ResponsiveContainer>
						<TabletBreakpoint>
							<Styled.Wrapper>
								<Styled.TabletOnly
									src={`${this.props.responsiveImages.tabletImg.url}`}
									alt={`${this.props.responsiveImages.tabletImg.alt}`}
								/>
								<Styled.MobileDisclaimer>
									<Styled.DisclaimerContainer>
										<span>{this.props.options}</span>
									</Styled.DisclaimerContainer>
								</Styled.MobileDisclaimer>
							</Styled.Wrapper>
						</TabletBreakpoint>
						<MobileBreakpoint>
							<Styled.Wrapper>
								<Styled.MobileOnly
									src={`${this.props.responsiveImages.mobileImg.url}`}
									alt={`${this.props.responsiveImages.mobileImg.alt}`}
								/>
								<Styled.MobileDisclaimer>
									<Styled.DisclaimerContainer>
										<span>{this.props.options}</span>
									</Styled.DisclaimerContainer>
								</Styled.MobileDisclaimer>
							</Styled.Wrapper>
						</MobileBreakpoint>
						<Styled.ResponsiveContent>
							<Styled.ContentInner>
								<Styled.VideoTitle>
									<div>
										<Styled.Title>{this.props.headline}</Styled.Title>
										<Styled.BodyCopy>{this.props.bodycopy}</Styled.BodyCopy>
									</div>
								</Styled.VideoTitle>
								<CtaItems />
							</Styled.ContentInner>
						</Styled.ResponsiveContent>
					</Styled.ResponsiveContainer>										
				</Styled.ExploreCaroursel>
			);
		}
	}
