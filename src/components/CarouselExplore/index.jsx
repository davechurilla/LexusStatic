import React from "react";
import Styled from "./index.styled";
import Slider from "react-slick";

const ExploreCaroursel = ({ children }) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	};
	return (
		<Styled.ExploreCaroursel>
			<Slider {...settings}>
				<div
					className="slide slide-count-1 active"
					style={{ left: "0px", display: "block" }}
				>
					<div className="carousel-item single-slide">
						<div className="carousel-item-slide">
							<div className="carousel--bg carousel-item-video">
								<video autoPlay muted loop>
									<source
										src="https://www.lexus.com/media/performance/Lexus-Performance-LC_1280x720.mp4"
										type="video/mp4"
									/>
									<source
										src="https://www.lexus.com/media/performance/Lexus-Performance-LC_1280x720.webm"
										type="video/webm"
									/>
								</video>

								<div className="item-slide-image">
									<img
										data-medium="http://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-LC-960x561-TBD_M75.jpg"
										data-small="http://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-LC-572x322-TBD_M75.jpg"
										src="http://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-LC-960x561-TBD_M75.jpg"
										className="responsive-image block full-width bg-image loaded"
									/>
									<div className="img-disclaimer disclaimer--small">
										<div
											className="disclaimer-container disclaimer--right"
											style={{ color: "#FFFFFF" }}
										>
											<span>Options shown</span>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel--copy">
								<div className="vid-disclaimer disclaimer--large">
									<div
										className="disclaimer-container disclaimer--right"
										style={{ color: "#FFFFFF" }}
									>
										<span>
											Professional driver on a closed course. Do not attempt.
											Options shown.
										</span>
									</div>
								</div>
								<div className="img-disclaimer disclaimer--medium">
									<div
										className="disclaimer-container disclaimer--right"
										style={{ color: "#FFFFFF" }}
									>
										<span>Options shown</span>
									</div>
								</div>

								<div className="carousel--copy-inner">
									<h3>LC 500</h3>
									<p>
										The embodiment of performance prowess. A 10-speed
										Direct-Shift transmission, a first of its kind in the luxury
										category<sup className="disclaimer-counters">12</sup>
										<span
											className="tooltip-trigger disclaimer finished"
											data-disclaimers='[{"code":"CLASSLEADLC2","isTerms":false,"body":"2020 LC vs. 2019/2020 competitors. Information from manufacturers’ websites as of 5/15/2019."}]'
										>
											<span className="asterisk">*</span>
										</span>
										, races through gears with lightning-quick precision. Always
										selecting the optimal gear, it maximizes output from one of
										the most powerful naturally aspirated 5.0-liter V8 engines
										available.
									</p>
									<a href="/models/LC" className="btn light">
										Explore
									</a>
									<a
										href="/build-your-lexus/#!/series/LC/"
										className="btn light transparent"
									>
										Build
									</a>
								</div>
							</div>
						</div>
						<div className="carousel-item-cover"></div>
					</div>
				</div>
				<div
					className="slide slide-count-1"
					style={{ left: "-1440px" }}
				>
					<div className="carousel-item single-slide">
						<div className="carousel-item-slide">
							<div className="carousel--bg carousel-item-video">
								<video autoPlay muted loop>
									<source
										src="https://www.lexus.com/media/performance/PerfRCF1.mp4"
										type="video/mp4"
									/>
									<source
										src="https://www.lexus.com/media/performance/PerfRCF1.webm"
										type="video/webm"
									/>
								</video>

								<div className="item-slide-image">
									<img
										data-medium="http://www.lexus.com/cm-img/performance/landing/05/Lexus-Performance-models-carousel-RCF-960x561_M75.jpg"
										data-small="http://www.lexus.com/cm-img/performance/landing/05/Lexus-Performance-models-carousel-RCF-572x322_M75.jpg"
										src="http://www.lexus.com/cm-img/performance/landing/05/Lexus-Performance-models-carousel-RCF-960x561_M75.jpg"
										className="responsive-image block full-width bg-image loaded"
									/>
									<div className="img-disclaimer disclaimer--small">
										<div
											className="disclaimer-container disclaimer--right"
											style={{ color: "#FFFFFF" }}
										>
											<span>Options shown</span>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel--copy">
								<div className="vid-disclaimer disclaimer--large">
									<div
										className="disclaimer-container disclaimer--right"
										style={{ color: "#FFFFFF" }}
									>
										<span>
											Professional driver on a closed course. Do not attempt.
											Options shown.
										</span>
									</div>
								</div>
								<div className="img-disclaimer disclaimer--medium">
									<div
										className="disclaimer-container disclaimer--right"
										style={{ color: "#FFFFFF" }}
									>
										<span>Options shown</span>
									</div>
								</div>

								<div className="carousel--copy-inner">
									<h3>RC F</h3>
									<p>
										Pushing performance to new extremes, the RC F now features
										the most powerful Lexus V8 to date. And with the addition of
										the new RC F Track Edition that touts a best-in-class
										power-to-weight ratio
										<sup className="disclaimer-counters">13</sup>
										<span
											className="tooltip-trigger disclaimer finished"
											data-disclaimers='[{"code":"CLASSLEADRCF4","isTerms":false,"body":"2020 RC F Track Edition vs. 2019/2020 competitors. Information from manufacturers’ websites as of 5/29/2019."}]'
										>
											<span className="asterisk">*</span>
										</span>{" "}
										and seamlessly accelerates from 0–60 mph in a mere 3.96
										seconds,<sup className="disclaimer-counters">14</sup>
										<span
											className="tooltip-trigger disclaimer finished"
											data-disclaimers='[{"code":"AMCITESTCERT","isTerms":false,"body":"AMCI Testing Certified."}]'
										>
											<span className="asterisk">*</span>
										</span>{" "}
										it brings you closer to the raceway than ever.
									</p>
									<a href="/models/RCF" className="btn light">
										Explore
									</a>
									<a
										href="/build-your-lexus/#!/series/RCF/"
										className="btn light transparent"
									>
										Build
									</a>
								</div>
							</div>
						</div>
						<div className="carousel-item-cover"></div>
					</div>
				</div>
				<div
					className="slide slide-count-1"
					style={{ left: "-1440px" }}
				>
					<div className="carousel-item single-slide">
						<div className="carousel-item-slide">
							<div className="carousel--bg carousel-item-video">
								<video autoPlay muted loop>
									<source
										src="https://www.lexus.com/media/performance/Lexus-Performance-GS_F_1280x720.mp4"
										type="video/mp4"
									/>
									<source
										src="https://www.lexus.com/media/performance/Lexus-Performance-GS_F_1280x720.webm"
										type="video/webm"
									/>
								</video>

								<div className="item-slide-image">
									<img
										data-medium="http://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-GSF-960x561-TBD_M75.jpg"
										data-small="http://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-GSF-572x322-TBD_M75.jpg"
										src="http://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-GSF-960x561-TBD_M75.jpg"
										className="responsive-image block full-width bg-image loaded"
									/>
									<div className="img-disclaimer disclaimer--small">
										<div
											className="disclaimer-container disclaimer--right"
											style={{ color: "#FFFFFF" }}
										>
											<span>Previous model year shown</span>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel--copy">
								<div className="vid-disclaimer disclaimer--large">
									<div
										className="disclaimer-container disclaimer--right"
										style={{ color: "#FFFFFF" }}
									>
										<span>
											Professional driver on a closed course. Do not attempt.
											Options shown. Previous model year shown.
										</span>
									</div>
								</div>
								<div className="img-disclaimer disclaimer--medium">
									<div
										className="disclaimer-container disclaimer--right"
										style={{ color: "#FFFFFF" }}
									>
										<span>Previous model year shown</span>
									</div>
								</div>

								<div className="carousel--copy-inner">
									<h3>GS F</h3>
									<p>
										The most powerful sedan Lexus has ever crafted. With a
										race-ready gauge cluster, 467 horsepower
										<sup className="disclaimer-counters">3</sup>
										<span
											className="tooltip-trigger disclaimer finished"
											data-disclaimers='[{"code":"PREMIUMFUEL","isTerms":false,"body":"Ratings achieved using the required premium unleaded gasoline with an octane rating of 91 or higher. If premium fuel is not used, performance will decrease."}]'
										>
											<span className="asterisk">*</span>
										</span>{" "}
										and a top track speed of 168 mph,
										<sup className="disclaimer-counters">3,</sup>
										<sup className="disclaimer-counters">15</sup>
										<span
											className="tooltip-trigger disclaimer finished"
											data-disclaimers='[{"code":"PREMIUMFUEL","isTerms":false,"body":"Ratings achieved using the required premium unleaded gasoline with an octane rating of 91 or higher. If premium fuel is not used, performance will decrease."},{"code":"PERFFIGS","isTerms":false,"body":"Performance figures are for comparison only and were obtained with prototype vehicles by professional drivers using special safety equipment and procedures. Do not attempt."}]'
										>
											<span className="asterisk">*</span>
										</span>{" "}
										it brings entirely new levels of exhilaration.
									</p>
									<a href="/models/GSF" className="btn light">
										Explore
									</a>
									<a
										href="/build-your-lexus/#!/series/GSF/"
										className="btn light transparent"
									>
										Build
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		</Styled.ExploreCaroursel>
	);
};

export default ExploreCaroursel;
