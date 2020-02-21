import React, { Component } from "react";
import Styled from "./index.styled";
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';

import Typography from "../Typography";
import {
  MobileBreakpoint,
  TabletBreakpoint,
  useMobileBreakpoint
} from "../../packages/breakpoints";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Custom Slick styles
import "./styles.css";

export default class ExploreCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldSlide: 0,
      activeIndex: 0
    };
  }

  handleClick = (e, id) => {
    e.preventDefault();
    const slide = Object.values(id)[0];
    this.setState({ activeIndex: slide });
    this.slider.slickGoTo(slide);
  };

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
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeIndex: next })
    };

    const NavItems = () =>
      this.props.navItems.map(({ text, id, ...navitem }) => (
        <Styled.CarouselNavLi
          key={text}
          className={this.state.activeIndex === id ? "active" : ""}
        >
          <Styled.CarouselNavItem
            {...navitem}
            onClick={e => this.handleClick(e, { id })}
            key={text}
          >
            {text}
          </Styled.CarouselNavItem>
        </Styled.CarouselNavLi>
      ));

    const CtaItems = () =>
      this.ctas.map(({ url, text, ...cta }) => (
        <Styled.Button {...cta} as="a" href={`${url}`} key={text}>
          {text}
        </Styled.Button>
      ));

    return (
      <Styled.ExploreCarousel {...this.props}>
        <Styled.HeadingComponent>
          <Styled.Heading>{this.props.heading}</Styled.Heading>
          <Styled.Divider></Styled.Divider>
        </Styled.HeadingComponent>
        <Styled.CarouselNav>
          <NavItems />
        </Styled.CarouselNav>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {this.props.slides.map(slide => (
            <Styled.VideoWrapper key={slide.headline}>
              <Styled.BackgroundVideo
                autoPlay
                muted
                loop
                poster={`${slide.backupImg.url}`}
              >
                <source src={`${slide.heroVideo}.mp4`} />
                <source src={`${slide.heroVideo}.webm`} />
              </Styled.BackgroundVideo>
              <Styled.SlideContent>
                <Styled.ContentInner>
                  <Styled.VideoTitle>
                    <div>
                      <Styled.Title>{slide.headline}</Styled.Title>
                      <Styled.BodyCopy>{slide.bodycopy}</Styled.BodyCopy>
                    </div>
                  </Styled.VideoTitle>
                  {slide.ctas.map(({ url, text, ...cta }) => (
                    <Styled.Button {...cta} as="a" href={`${url}`} key={text}>
                      {text}
                    </Styled.Button>
                  ))}
                </Styled.ContentInner>
              </Styled.SlideContent>
              <Styled.Disclaimer>
                <Styled.DisclaimerContainer>
                  <span>{slide.disclaimer}</span>
                </Styled.DisclaimerContainer>
              </Styled.Disclaimer>
            </Styled.VideoWrapper>
          ))}
        </Slider>
        {this.props.slides.map(slide => (
          <Styled.ResponsiveContainer key={slide.headline}>
            <TabletBreakpoint>
              <Styled.Wrapper>
                <Styled.TabletOnly
                  src={`${slide.responsiveImages.tabletImg.url}`}
                  alt={`${slide.responsiveImages.tabletImg.alt}`}
                />
                <Styled.MobileDisclaimer>
                  <Styled.DisclaimerContainer>
                    {slide.options}
                  </Styled.DisclaimerContainer>
                </Styled.MobileDisclaimer>
              </Styled.Wrapper>
            </TabletBreakpoint>
            <MobileBreakpoint>
              <Styled.Wrapper>
                <Styled.MobileOnly
                  src={`${slide.responsiveImages.mobileImg.url}`}
                  alt={`${slide.responsiveImages.mobileImg.alt}`}
                />
                <Styled.MobileDisclaimer>
                  <Styled.DisclaimerContainer>
                    {slide.options}
                  </Styled.DisclaimerContainer>
                </Styled.MobileDisclaimer>
              </Styled.Wrapper>
            </MobileBreakpoint>
            <Styled.ResponsiveContent>
              <Styled.ContentInner>
                <Styled.VideoTitle>
                  <div>
                    <Styled.Title>{slide.headline}</Styled.Title>
                    <Styled.BodyCopy>{slide.bodycopy}</Styled.BodyCopy>
                  </div>
                </Styled.VideoTitle>
                {slide.ctas.map(({ url, text, ...cta }) => (
                  <Styled.Button {...cta} as="a" href={`${url}`} key={text}>
                    {text}
                  </Styled.Button>
                ))}
              </Styled.ContentInner>
            </Styled.ResponsiveContent>
          </Styled.ResponsiveContainer>
        ))}
      </Styled.ExploreCarousel>
    );
  }
}
