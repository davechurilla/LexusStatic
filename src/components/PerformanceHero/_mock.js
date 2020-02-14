export default {
  props: {
    // children: 'This is the Performance Hero Component',
    headline: 'PERFORMANCE BORN OF REFINEMENT',
    subheadline: 'The Lexus High-Performance Line',
    heroVideo: 'https://www.lexus.com/media/performance/PerformanceHeader1',
    backupImg: {
    	url: 'https://www.lexus.com/cm-img/performance/landing/05/Lexus-Performance-Hero-Tablet-960x469_M75.jpg',
    	alt: 'Lexus Performance'
    },
    responsiveImages: {
  	  tabletImg: {
  	  	url: 'https://www.lexus.com/cm-img/performance/landing/05/Lexus-Performance-Hero-Tablet-960x469_M75.jpg',
  	  	alt: 'Tablet image'
  		},
  		mobileImg: {
  			url: 'https://www.lexus.com/cm-img/performance/landing/05/Lexus-Performance-Hero-Mobile-640x700_M75.jpg',
  			alt: 'Mobile image'
  		}
    },
    ctas: [
    	 {
	    	url: 'https://www.lexus.com/media/performance/PerformanceHeader1.mp4',
	    	text: 'PLAY VIDEO',
	    	primary: ''
    	},
    	 {
	    	url: '#explore',
	    	text: 'SEE ALL MODELS',
	    	primary: 'primary'
    	}
    ],
    disclaimer: 'Professional driver on a closed course. Do not attempt. Options shown.',
    options: 'Options shown'
  }
};
