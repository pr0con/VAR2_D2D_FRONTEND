import React, { Component, useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import mojs from '@mojs/core';

let initialState = {
	clapCount: 0,
	clapTotal: 267,
	isClicked: false,
}

const animeShockwave = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 2px #27ae60;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
    box-shadow: 0 0 50px #145b32, inset 0 0 10px #27ae60;
  }
`;

const StyledMediumClap = styled.div`
	position: relative;
	margin: 10rem 0 0 10rem;
	
	button.clap-button  {
		position: relative;
		top: 10rem;
		left: 10rem;
		outline: 1px solid transparent;
		border-radius: 50%;
		border: 1px solid #bdc3c7;
		width: 100px;
		height: 100px;
		background: none;
		user-select: none;
	}	
	button.clap-button:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		border-radius: 50%;
		width: 100px;
		height: 100px;
	}
	button.clap-button:hover {
		cursor: pointer;
		border: 1px solid #27ae60;
		transition: border-color 0.3s ease-in;
	}
	button.clap-button:hover:after {
		animation: ${animeShockwave} 1s ease-in infinite;
	}
	button {
		svg {
			width: 4rem;
			height: 4rem;
		}
	}				
`;


const StyledClapCount = styled.span`
	position: absolute;
	top: -70px;
	left: 30px;
	font-size: 1.2rem;
	color: white;
	background: #27ae60;
	border-radius: 50%;
	height: 40px;
	width: 40px;
	line-height: 40px;
	z-index: 1;	
`;

const ClapCount = ({ clapCount }) => {
	return (	
		<StyledClapCount id="ClapCountBubble">
			+ { clapCount }
		</StyledClapCount>
	)
}


const StyledClapTotal = styled.div`
	position: absolute;
	font-size: 1.2rem;
	width: 80px;
	text-align: center;
	left: 0;
	top: -22px;
	color: #bdc3c7;	
`;
const ClapTotal = ({ clapTotal }) => {
	return (
		<StyledClapTotal id="ClapTotal">
			{ clapTotal }
		</StyledClapTotal>
	)
}



 const StyledClapIcon = styled.span`
	svg {
		width: 40px;
		fill: none;
		stroke: #27ae60;
		stroke-width: 2px;
	
		&.checked {
			fill: #27ae60;
			stroke: #fff;
			stroke-width: 1px;
		}
	}
`;
 const ClapIcon = ({ isClicked }) => {
	return(
		<StyledClapIcon >
		    <svg
		        id='clapIcon'
		        xmlns='http://www.w3.org/2000/svg'
		        viewBox='-549 338 100.1 125'
		        className={(isClicked) ? `checked` : ''}
		    >
		        <path d='M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z' />
		        <path d='M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9' />
		    </svg>
		    		
		</StyledClapIcon>
	)
}

/* HOC */	
const withClapAnimation = (WrappedComponent) => {	
	class WithClapAnimation extends Component {
		animationTimeline = new mojs.Timeline();
		state = {
			animationTimeline: this.animationTimeline
		}		
		
		componentDidMount() {
			const duration = 300;
			const scaleButton = new mojs.Html({
				el: '#ClapButton',
				duration: duration,
				scale: { 1.3: 1 },
				easing: mojs.easing.ease.out,			
			});			
		
			
			const countTotalAnimation = new mojs.Html({
				el: '#ClapTotal',
				opacity: {0:1},
				y: {0:-3},
				delay: 200, //2 / 3 of duration
				duration: duration,
			})
			
			const clapCountAnimation = new mojs.Html({
				el: '#ClapCountBubble',
				opacity: {0:1},
				duration: duration,
				y: {0:-15},
				
			}).then({
				opacity:{1:0},
				delay: duration / 2,
				y: -80	
			})					
		
			const triangleBurst = new mojs.Burst({
				parent: '#ClapButton',
				radius: {50:90},
				count: 5,
				angle: 30,
				children: {
					shape: 'polygon',
					radius: {6:0},
					stroke: 'rgba(204, 51, 0, .5)',
					strokeWidth: 2,
					angle: 210,
					delay: 30,
					speed: 0.2,
					easing: mojs.easing.bezier(0.1,1,0.3,1),
					duration: duration,
				}		
			});
			
			const circleBurst = new mojs.Burst({
				parent: '#ClapButton',
				radius: {50:75},
				count: 5,
				angle: 25,
				duration: duration,
				children: {
					shape: 'circle',
					radius: {3:0},
					fill: 'rgba(83,186,131,.5)',
					angle: 210,
					delay: 30,
					speed: 0.2,
					easing: mojs.easing.bezier(0.1,1,0.3,1),
					duration: duration,
				}		
			})			
					
		
			/* sets the button to inital scale of 1 */
			const clapButtonEl = document.getElementById('ClapButton');
			clapButtonEl.style.transform = 'scale(1,1)';
			
			const newAnimationTimeline = this.animationTimeline.add([scaleButton, countTotalAnimation, clapCountAnimation, triangleBurst, circleBurst]);
			this.setState({ animationTimeline: newAnimationTimeline })		
		}
		
		
		render() {
			return (
				<WrappedComponent { ...this.props } animationTimeline={this.state.animationTimeline}/>
			)
		}
	}
	
	return WithClapAnimation
}	

const Usage = () => {
	const AnimatedMediumClap = withClapAnimation(MediumClap)
	return <AnimatedMediumClap />
}

export default Usage;

const MediumClap = ({ animationTimeline }) => {
	const [ clapState, setClapState ] = useState(initialState);
	const { clapCount, clapTotal, isClicked } = clapState;	
	
	
	const handleClapClick = () => {
		animationTimeline.replay()
		setClapState((previousState) => ({
			isClicked: true,
			clapCount: Math.min(clapCount + 1, 12),
			clapTotal: (clapCount < 12) ? clapTotal + 1 : clapTotal,
		}));		
	}
	
	return(
		<StyledMediumClap>
			<button id="ClapButton" className="clap-button" onClick={handleClapClick}>
				<ClapIcon isClicked={isClicked} />
				<ClapCount clapCount={clapCount}/>
				<ClapTotal clapTotal={clapTotal}/>
			</button>
		</StyledMediumClap>		
	)
}