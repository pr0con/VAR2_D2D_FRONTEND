import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';


/* NOTES
	animation-delay
		- delays the animation
	animation-fill-mode
		- node, return to position
		- forwards, elements stays at final position	
		- backwards, start animation at first value if delay set
		- both, applys backwards and forwards together
	animation-iteration-count
		- repeat how many times
		- infinite, keyword for what it sez...
	animation-timing-function
		- ease, ease-out, ease-in, ease-in-out, linear
	animation-direction
		- normal
		- reverse, do animaiton backwards
		- alternate,  begin-to-end repeat
		- alternate-reverse, end-to-begin repeat
		
	shorthand:
		- animation: [name] [duration] [fill-mode] [iteration count] [east-function] [direction] [delay]
		- animation: moving 2s 
*/

const anime1 = keyframes`
  from {
    transform: translatX(0);
  }

  to {
    transform: translateX(500px);
  }
`;
const anime2 = keyframes`
  0% {
    transform: translatX(0);
  }

  50% {
  	 transform: translateX(250px);
  }

  100% {
    transform: translate(500px, 100px);
  }
`;
const anime3 = keyframes`
	0% { transform: rotateX(0deg) rotateY(0deg); }
	50% { transform: rotateX(0deg) rotateY(180deg); }
	100% { transform: rotateX(180deg) rotateY(180deg); }
`;

const anime4 = keyframes`
	0% { content: 'Transitions'; }
	50% { content: 'Animations'; }
	100% { content: 'Transforms'; }
`;
const anime5 = keyframes`
	0% {
		transform: scale(0.92) rotate(0deg);
	}
	0% {
		transform: scale(0.92) rotate(360deg);
	}	
`;


const anime6 = keyframes`
	0% { transform: scale(0.5); opacity: 0; }
	50% { transform: scale(1); opacity: 1; }
	100% { transform: scale(1.2); opacity: 0; }
`;


const anime7 = keyframes`
	0% {
		width: 10rem;
		height: 10rem;
	}
	10% {
		width: 10rem;
		height: 10rem;
	}
	50% {
		width: 15rem;
		height: 15rem;
	}
	90% {
		width: 10rem;
		height: 10rem;
	}
	100% {
		width: 10rem;
		height: 10rem;
	}				
`;
const anime7_1 = keyframes`
	0% {
		transform: rotate(0deg);
	}
	10% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(90deg);
	}
	90% {
		transform: rotate(90deg);
	}
	100% {
		transform: rotate(90deg);
	}				
`;

const anime8 = keyframes`
	0% { top: 0px; left: 0px; }
	12% { top: 0px; left: 50% }
	25% { top: 0px; left: 50%; }
	37.5% { top: 50%; left: 50%; }
	50% { top: 50%; left: 50%; }
	62.5% { top: 50%; left: 0px; }
	75% { top: 50%; left: 0px; }
	87.5% { top: 0px; left: 0px; }
	100% { top: 0px; left: 0px; }
`;

const anime9 = keyframes`
	0% {
		width: 0px;
	}
	50% {
		width: 100%;
	}
	100% {
		width: 0px;
	}		
`;

const StyledKFAnime = styled.div`
	position: relative;
	padding: 1rem;	
	height: calc(100vh - 16.4rem);
	
	#kf-example-one {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		animation-name: ${anime1};
		animation-duration: 2s;	
		animation-iteration-count: 2;
	}
	#kf-example-two {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		animation-name: ${anime2};
		animation-duration: 2s;	
		animation-fill-mode: forwards;
	}
	#kf-example-three {
		width: 100px;
		height: 100px;
		background: #fff;
		border-radius: 1rem;
		animation: ${anime3} 2s linear infinite;
	}
	#kf-example-four-span:before {
		content: 'Transitions';
		text-transform: uppercase;
		color: #0f0;
		animation: ${anime4} 5s infinite;
	}
	
	#kf-example-five {
		position: absolute;
		right: 5px;
		bottom: 5px;
		
		.svg-icon-wrapper {
			position: relative;
			width: 100px;
			height: 100px;
			border: 2px solid rgba(9,81,105);
			border-radius: 50%;
			transition: all .2s;
			display: flex;
			align-items: center;
			justify-content: center;
			
			svg{
				width: 3rem;
				color: rgba(9,81,105);
			}
			
			&:hover{
				cursor:pointer;
			}
			&:before {
				content: '';
				position: absolute;
				top: 0px;
				left: 0px;
				width: 100%;
				height: 100%;
				background:  rgba(9,81,105);
				border-radius: 50%;
				z-index: -1;
				transition: all .2s;
				opacity: 0;
			}
			
			&:hover:before {
				opacity: 1;
				transform: scale(0.8);
				z-index: 1;
			}
			&:hover svg {
				color: #fff;
				z-index: 2;
			}			
			&:after {
				content: '';
				position: absolute;
				top: 0px;
				left: 0px;
				width: 100%;
				height: 100%;
				background:  transparent;
				border-radius: 50%;
				z-index: 1;
				transition: all .2s;
				opacity: 0;
				border: 2px dashed rgba(9,81,105);
				box-sizing: border-box;
			}									
			&:hover:after {
				opacity: 1;
				animation: ${anime5} 10s linear infinite;
			}
													
		}
		
		.svg-icon-wrapper:not(:first-child) {
			margin-top: .5rem;
		}				
	}
	
	
	#kf-example-six {
		position: absolute;
		top: 100px;
		right: 100px;

		background-color: #58ea00;
		color: #fff;
		border-radius: 50%;
		
		width: 10rem;
		height: 10rem;
		
		display: flex;
		align-items: center;
		justify-content: center;		
		
		svg {
			width: 4.8rem;
		}
		
		&:before,
		&:after {
			content: '';
			position: absolute;
			left: -20px;
			top: -20px;
			right: -20px;
			bottom: -20px;
			border: 1px solid #58ea00;
			border-radius: 50%;
			animation: ${anime6} 1.5s linear infinite;
		}
		&:after {
			animation-delay: .5s;
		}						
	}
	
	#kf-example-seven {
		position: absolute;
		bottom: 200px;
		left: 100px;
		width: 10rem;
		height: 10rem;
		transform: rotate(45deg);
		animation: ${anime7} 1s linear infinite;
		
		span {
			width: 5rem;
			height: 5rem;
			border: 1px solid #fff;
			position: absolute;
			animation: ${anime7_1} 1s linear infinite;
		}
		span.span-one {
			top: 0px;
			left: 0px;
		}
		span.span-two {
			top: 0px;
			right: 0px;
		}	
		span.span-three {
			bottom: 0px;
			left: 0px;
		}	
		span.span-four {
			bottom: 0px;
			right: 0px;
		}									
	}
	
	#kf-example-eight {
		position: absolute;
		bottom: 200px;
		left: 300px;
		width: 15rem;
		height: 15rem;
		
		span {
			position: absolute;
			display: block;
			width: 5rem;
			height: 5rem;
			background: #ee5253;
			border-radius: .5rem;
			animation: ${anime8} 2s linear infinite;
			
			&.span-two {
				animation-delay: .7s;
			}
			&.span-three {
				animation-delay: 1.4s;
			}			
		}		
	}
	
	
	#kf-example-nine{
		position: absolute;
		bottom: 200px;
		left: 500px;
		color: #fff;
		font-size: 2rem;
		text-transform: uppercase;
		letter-spacing: 1rem;
		
		&:before {
			content: "loading...";
			text-transform: uppercase;
			letter-spacing: 1rem;
			color: #f6b93b;
			position: absolute;
			top:0px;
			left:0px;
			overflow: hidden;
			border-right: 4px solid #f6b93b;
			animation: ${anime9} 5s linear infinite;
		}		
	}							
			
`;

export function KFAnime() {
	return(
		<StyledKFAnime>
			<div id="kf-example-one"></div>
			<div id="kf-example-two"></div>
			<div id="kf-example-three"></div>
			<div id="kf-example-four">I Love <span id="kf-example-four-span"></span></div>
			<div id="kf-example-five">
				<div className="svg-icon-wrapper">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg-inline--fa fa-globe fa-w-16 fa-2x"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>									
				</div>
				<div className="svg-icon-wrapper">
					<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="blog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-blog fa-w-16 fa-2x"><path fill="currentColor" d="M200.3 0c-4.5-.1-8.2 3.6-8.2 8.1V24c0 4.4 3.5 7.8 7.9 7.9C352.8 35.7 476 159.2 480 312c.1 4.4 3.6 7.9 7.9 7.9h16c4.5 0 8.2-3.7 8.1-8.2C507.7 141.8 370.2 4.3 200.3 0zm0 96c-4.5-.2-8.2 3.6-8.2 8.1v16c0 4.3 3.5 7.8 7.8 8 99.8 4 180.5 84.2 184.2 184 .2 4.3 3.6 7.8 8 7.8h15.8c4.5 0 8.2-3.7 8.1-8.2-4.3-117-98.7-211.4-215.7-215.7zM121 256h-9c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h10.9c47 0 88 38.4 84.9 85.3-2.6 39.9-34.6 71.8-74.4 74.5C86.4 467 48 426 48 378.9V144c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v233c0 74.2 60.1 138.5 134.3 134.9 65.6-3.2 118.4-56 121.6-121.6C259.4 316.1 195.2 256 121 256z"></path></svg>								
				</div>
				<div className="svg-icon-wrapper">
					<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="project-diagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-project-diagram fa-w-20 fa-2x"><path fill="currentColor" d="M592 0h-96c-26.51 0-48 21.49-48 48v32H192V48c0-26.51-21.49-48-48-48H48C21.49 0 0 21.49 0 48v96c0 26.51 21.49 48 48 48h94.86l88.76 150.21c-4.77 7.46-7.63 16.27-7.63 25.79v96c0 26.51 21.49 48 48 48h96c26.51 0 48-21.49 48-48v-96c0-26.51-21.49-48-48-48h-96c-5.2 0-10.11 1.04-14.8 2.57l-83.43-141.18C184.8 172.59 192 159.2 192 144v-32h256v32c0 26.51 21.49 48 48 48h96c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM32 144V48c0-8.82 7.18-16 16-16h96c8.82 0 16 7.18 16 16v96c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16zm336 208c8.82 0 16 7.18 16 16v96c0 8.82-7.18 16-16 16h-96c-8.82 0-16-7.18-16-16v-96c0-8.82 7.18-16 16-16h96zm240-208c0 8.82-7.18 16-16 16h-96c-8.82 0-16-7.18-16-16V48c0-8.82 7.18-16 16-16h96c8.82 0 16 7.18 16 16v96z"></path></svg>								
				</div>
				<div className="svg-icon-wrapper">
					<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="book-dead" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-book-dead fa-w-14 fa-2x"><path fill="currentColor" d="M216 160c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm-88 43.4V216c0 13.2 10.8 24 24 24h80c13.2 0 24-10.8 24-24v-12.6c20.4-15.1 32-36.4 32-59.4 0-44.1-43.1-80-96-80s-96 35.9-96 80c0 23 11.6 44.3 32 59.4zM240 96c35.3 0 64 21.5 64 48 0 14.3-8.8 27.9-24.3 37.2l-7.7 4.7V208h-64v-22.1l-7.7-4.7c-15.4-9.3-24.3-22.9-24.3-37.2 0-26.5 28.7-48 64-48zm208 296V24c0-13.3-10.7-24-24-24H80C35.8 0 0 35.8 0 80v368c0 35.3 28.7 64 64 64h372c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-3.3c-4-20.2-3.2-49.7.4-65.8 8.7-3.6 14.9-12.2 14.9-22.2zm-43.7 88H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h340.3c-2.9 18.8-3.1 43.6 0 64zm11.7-96H64c-11.7 0-22.5 3.4-32 8.9V80c0-26.5 21.5-48 48-48h336zm-291.2-51.6l6.3 14.7c1.7 4.1 6.4 5.9 10.5 4.2l98.3-42.2 98.4 42.1c4.1 1.7 8.8-.1 10.5-4.2l6.3-14.7c1.7-4.1-.1-8.8-4.2-10.5l-70.3-30.1 70.3-30.2c4.1-1.7 5.9-6.4 4.2-10.5l-6.3-14.7c-1.7-4.1-6.4-5.9-10.5-4.2L240 274.4l-98.3-42.1c-4.1-1.7-8.8.1-10.5 4.2l-6.3 14.7c-1.7 4.1.1 8.8 4.2 10.5l70.3 30.2-70.4 30c-4 1.8-5.9 6.5-4.2 10.5z"></path></svg>								
				</div>												
			</div>
			<div id="kf-example-six">
				<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="comment-alt-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-comment-alt-dots fa-w-16 fa-2x"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM128 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"></path></svg>
			</div>
			
			<div id="kf-example-seven">
				<span className="span-one"></span>
				<span className="span-two"></span>
				<span className="span-three"></span>
				<span className="span-four"></span>
			</div>
			
			<div id="kf-example-eight">
				<span className="span-one"></span>
				<span className="span-two"></span>
				<span className="span-three"></span>
			</div>
			
			<div id="kf-example-nine">
				Loading...
			</div>			
						
			
		</StyledKFAnime>
	)
}