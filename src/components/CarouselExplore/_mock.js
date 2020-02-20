export default {
	props: {
		backupImg: {
			url: "https://www.lexus.com/cm-img/performance/landing/05/Lexus-Performance-Hero-Tablet-960x469_M75.jpg",
			alt: "Lexus Performance"
		},
		heading: 'EXPLORE LEXUS HIGH PERFORMANCE',
		navItems: [
			{
				id: 0,
				text: 'LC 500',
			},
		 {
				id: 1,
				text: 'RC F'
			},
			{
				id: 2,
				text: 'GS F'				
			}			
		],
		headline: 'LC 500',
		bodycopy: 'The embodiment of performance prowess. A 10-speed Direct-Shift transmission, a first of its kind in the luxury category*, races through gears with lightning-quick precision. Always selecting the optimal gear, it maximizes output from one of the most powerful naturally aspirated 5.0-liter V8 engines available.',
		responsiveImages: {
			tabletImg: {
				url: 'https://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-LC-960x561-TBD_M75.jpg',
				alt: 'Tablet image'
			  },
			  mobileImg: {
				  url: 'https://www.lexus.com/cm-img/performance/landing/Lexus-Performance-models-carousel-LC-572x322-TBD_M75.jpg',
				  alt: 'Mobile image'
			  }
		},	
		ctas: [
			{
			   url: 'https://www.lexus.com/https://www.lexus.com/models/LC',
			   text: 'EXPLORE',
			   primary: ''
		   },
			{
			   url: 'https://www.lexus.com/build-your-lexus/#!/series/LC/',
			   text: 'BUILD',
			   primary: 'primary'
		   }
	   ],
	   disclaimer: 'Professional driver on a closed course. Do not attempt. Options shown.',
	   options: 'Options shown'
	}
};
