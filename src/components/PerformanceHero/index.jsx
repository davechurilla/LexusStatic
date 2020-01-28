import React from 'react';
import Styled from './index.styled';

const PerformanceHero = ({ children }) => {
  return (
    <Styled.PerformanceHero>
    {children}
	<section id="section-hero">
	    <div className="video--overlay-copy section-padded">
	        <div className="text-center constrain-x">
	        </div>
	    </div>
        <div className="video--wrapper">
            <video autoplay="" muted="" loop="" className="hero-video">
                <source src="https://www.lexus.com/media/performance/PerformanceHeader1.mp4" />
                <source src="https://www.lexus.com/media/performance/PerformanceHeader1.webm" />
            </video>            
        </div>
        <div className="video--wrapper-image">
        <div className="tablet-only">
            <img src="/cm-img/performance/landing/05/Lexus-Performance-Hero-Tablet-960x469_M75.jpg" className="bg-image" alt="" />
                <div className="disclaimer-container disclaimer--right">
                    <span>Options shown</span>
                </div>
        </div>
            <div className="mobile-only">
                <img src="/cm-img/performance/landing/05/Lexus-Performance-Hero-Mobile-640x700_M75.jpg" className="bg-image" alt="" />
                    <div className="disclaimer-container disclaimer--right">
                        <span>Options shown</span>
                    </div>
            </div>
        </div>
	    <div className="video--content">
	            <div className="video--title">
	                <div className="divider-vert"></div>
	                <div>
	                    <h1>PERFORMANCE BORN OF REFINEMENT</h1>
	                    <h4>The Lexus High-Performance Line</h4>
	                </div>
	            </div>
	        <div className="video--buttons">
	                        <a className="btn js-modal-toggle light" href="https://www.lexus.com/media/performance/PerformanceHeader1.mp4" data-target="#hero-modal">PLAY VIDEO</a>
	                        <a href="#explore" className="btn light transparent">SEE ALL MODELS</a>
	        </div>
	    </div>
	        <div className="disclaimer--large">
	                <div className="disclaimer-container disclaimer--right">
	                    <span>Professional driver on a closed course. Do not attempt. Options shown.</span>
	                </div>
	        </div>
	</section>
    </Styled.PerformanceHero>
  );
};

export default PerformanceHero;
