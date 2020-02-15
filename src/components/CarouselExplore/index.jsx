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
		render() {
			const settings = {
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
			};
			return (
				<Styled.ExploreCaroursel>
					<div>
						<Slider {...settings}>
							<Styled.VideoWrapper>
								<Styled.BackgroundVideo autoPlay muted loop poster="">
									<source 
										src="https://www.lexus.com/media/performance/Lexus-Performance-LC_1280x720.mp4"
										type="video/mp4" />
									<source 
										src="https://www.lexus.com/media/performance/Lexus-Performance-LC_1280x720.mp4"
										type="video/webm" />
								</Styled.BackgroundVideo>
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
					</div>
				</Styled.ExploreCaroursel>
			);
		}
	}
