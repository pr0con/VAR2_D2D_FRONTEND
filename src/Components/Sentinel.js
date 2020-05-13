import React, { useRef, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { AppContext } from './AppProvider.js';


const anime1 = keyframes`
	0% { transform: scale(1); }
	25% { transform: scale(1); }
	30% { transform: scale(1.4); }
	50% { transform: scale(1.2); }
	70% { transform: scale(1.4); }
	100% { transform: scale(1); }
`;

const StyledSentinel = styled.div`
	svg.websocket-heart {
		width: 3rem;
		margin-right: 1rem;
		overflow: visible;
		.websocket-heart-outer {
			color: rgba(204, 51, 0, .5);
		}
		.websocket-heart-inner {
			color: rgba(204, 51, 0, 1);
			
			animation: ${anime1} 1.4s linear infinite;
		}			
	
	}
	
	#canvas {
		position: relative; 
		display: block; 
		width: 920px; 
		height: 468px;
	}
	#hidden-canvas-elements {
		position: relative; 
		height: 0px;
		overflow: hidden;	
	}			
`;


function World2Image(pointLat, pointLon) {
    // console.log(arguments);
    const mapWidth = 920;
    const mapHeight = 468;
    const x =  ((mapWidth / 360.0) * (180 + pointLon));
    const y =  ((mapHeight / 180.0) * (90 - pointLat));
    return [x, y];
}

let GetSolarPosition = () => {
    const d = new Date();
    const n = d.getUTCHours();
    const x = d.getUTCMinutes();
    const m = parseFloat(n + "." + (x / 60) * 100);
    const scaled = m * 38.333;
    const r = 920 - scaled;
    return r;
}



export function Sentinel() {
	const { rs, wsId, targets } = useContext(AppContext);
	
	const canvasRef = useRef(null);
	const worldRef = useRef(null);
	const overlayRef = useRef(null);
	const sunRef = useRef(null);
	const moonRef = useRef(null);
	const locationRef = useRef(null);
	const targetRef = useRef(null);

	useEffect(() => {
		let ctx = canvasRef.current.getContext("2d");
        let degrees = 0;
        let solar_pos_x;
        let lunar_pos_x = 0;
        let get_solar = 0;
		
		if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position, error) {
		        if(error) {
			        console.log(error);
		        }
		        
		        let lat = position.coords.latitude;
		        let lon = position.coords.longitude;
                let xy = World2Image(lat, lon);
                let x = xy[0];
                let y = xy[1];				
						        
		        
		     	function loop() {
			     	degrees += 0.1;
					
					if (get_solar++ >= 60) {
						solar_pos_x = GetSolarPosition();
						get_solar = 0;	
					}
					
					ctx.drawImage(worldRef.current, 0, 0, 920, 468);
					ctx.save();
					ctx.translate(x, y);
					ctx.drawImage(locationRef.current, -locationRef.current.width/2, -locationRef.current.width/2);
					ctx.translate(-x, -y);
                    if (targets) {
                        targets.forEach(t => ctx.drawImage(targetRef.current, t['map_pos'][0] - targetRef.current.width/2, t['map_pos'][1] - targetRef.current.width/2))
                    }					
					ctx.restore();
                    ctx.save();
                    ctx.translate(solar_pos_x, 200);
                    ctx.drawImage(sunRef.current, -55/2, -55/2);					

                    ctx.translate(-solar_pos_x, -200);
                    ctx.translate(920/2+lunar_pos_x, 200);
                    //ctx.drawImage(moon, -55/2, -55/2);
                    //console.log(lunar_pos_x);

                    ctx.translate(-(920/2+lunar_pos_x), -200);
                    ctx.drawImage(overlayRef.current, -(920-solar_pos_x), 0);

                    //console.log(solar_pos_x);

                    ctx.restore();					
					
					requestAnimationFrame(loop);			     	
			     	
			    }   
				requestAnimationFrame(loop);		        
		    });
		}		                
		
	},[targets]);		
	
	return(
		<StyledSentinel>
			<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="websocket-heart svg-inline--fa fa-heart fa-w-16 fa-2x"><g className="fa-group"><path className="websocket-heart-outer" fill="currentColor" d="M462.32 62.63C407.5 15.94 326 24.33 275.69 76.23L256 96.53l-19.69-20.3c-50.21-51.9-131.8-60.29-186.61-13.6-62.78 53.6-66.09 149.81-9.88 207.9l193.5 199.79a31.31 31.31 0 0 0 45.28 0l193.5-199.79c56.31-58.09 53-154.3-9.78-207.9zm-52.8 185l-143.1 143.85a15.29 15.29 0 0 1-21.7 0l-140-140.78c-28.37-28.52-33.78-75-8.37-106.23a76.44 76.44 0 0 1 113.77-5.88l45.49 45.7 42.37-42.58c28.38-28.52 74.65-34 105.71-8.45a77.35 77.35 0 0 1 5.83 114.36z" ></path><path className="websocket-heart-inner" fill="currentColor" d="M244.72 391.48l-140-140.78c-28.37-28.52-33.78-75-8.36-106.23a76.43 76.43 0 0 1 113.76-5.88l45.49 45.7 42.37-42.58c28.38-28.51 74.65-34 105.71-8.45a77.35 77.35 0 0 1 5.87 114.36L266.41 391.48a15.28 15.28 0 0 1-21.69 0z"></path></g></svg>		
			[ { rs } ][ { wsId } ]
			
			<canvas id="canvas"  width="920px" height="468px" ref={canvasRef}></canvas>
			<div id="hidden-canvas-elements">
				<img id="canvas-my-location" src="/images/my_location.png" ref={locationRef}/>
				<img id="canvas-a-target" src="/images/small_target.png" ref={targetRef}/>
				<img id="canvas-sun" src="/images/sunpos.png" ref={sunRef}/>
				<img id="canvas-world" src="/images/world.png" ref={worldRef}/>
				<img id="canvas-overlay" src="/images/overlay.png" ref={overlayRef}/>
				<img id="canvas-moon" src="/images/moon.png" ref={moonRef}/>				
			</div>
		</StyledSentinel>
	)
}