import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { navigate, useRoutes } from 'hookrouter';

import AppProvider from './AppProvider.js'; 
import { AppContext } from './AppProvider.js';


const StyledApp = styled.div`
	position: relative;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	
	display: grid;
	grid-template-columns: 24rem 1fr;
	
	#master-left-column {
		position: relative;
		min-height: 100vh;
		border-right: 1px solid #4c4c4c;
		
		display: flex;
		flex-direction: column;
		background: #252525;
		
		
		#master-left-column-header {
			min-height: 6.4rem;
			border-bottom: 1px solid #4c4c4c;
			
			display: flex;
			flex-direction: row;
			align-items: center;
			
			#master-left-column-header-logo	{
				width: 2.5rem;
				height: 2.5rem;
				margin-right: .5rem;
			}
			
			#master-left-column-header-text {
				font-size: 2.5rem;
				color: #fff;
			}
			
			padding: 1rem 2rem 1rem 2rem;
		}
	}
	
	
	
	#master-right-column {
		position: relative;
		display: flex;
		flex-direction: column;
		
		#master-right-column-nav {
			height: 6.4rem;
			border-bottom: 1px solid #4c4c4c;
			background: #252525;
			
			display: flex;
			flex-direction: row;
			align-items:center;
			
			padding: 0rem 2rem 0rem 2rem;
			
			#master-right-column-nav-pancake {
				display: flex;
				flex-direction: column;
				
				span {
					width: 2rem;
					height: .2rem;
					background: #515151;
					
					&:not(:first-child) {
						margin-top: .2rem;
					}
				}
				
				&:hover {
					cursor:pointer;
				}
			}
			#master-right-column-nav-search-wrapper {
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 3.8rem;
				flex-grow: 1;
				background: #111111;
				border: 1px solid #515151;
				margin: 0rem 3rem 0rem 3rem;
				
				svg {
					width: 2rem;
					height: 2rem;
					color: #fff;
					margin: 0rem 1rem 0rem 1rem;
				}
				#master-right-column-nav-search {
					flex-grow: 1;
					width: 100%;
					height: 100%;
					color: #ffffff;
					background: transparent;
					border: 0px;
					
				}
			}
			#master-right-column-buttons {
				height: 3.8rem;
				display: flex;
				flex-direction: row;
				align-items:center;
				
				#master-right-column-slider-trigger {
					display: flex;
					flex-direction: row;
					align-items:center;
					height: 3.8rem;
					
					span {
						width: 4px;
						height: 4px;
						background: #515151;
						border-radius: 50%;
						
						&:not(:last-child) {
							margin-right: .2rem;
						}
					}
					&:hover {
						cursor:pointer;
					}
				}
			}
		}
		
		#master-right-column-content {
			position: relative;
			flex-grow: 1;
			background: #111111;
			color: #fff;
			padding: 2rem;
		}
		
		#master-right-column-status {
			height: 5rem;
			border-top: 1px solid #4c4c4c;
			background: #111111;
		}	
	}
`;


import { Dev } from './Dev.js';
import { Sidebar } from './Sidebar.js';

import { Dashboard } from './Dashboard.js';
import { Charts } from './Charts.js';
import { Sentinel } from './Sentinel.js';
import { Widgets } from './Widgets.js';

import { Slider } from './Slider.js';

function App() {
	const routes = {
		'/': () => <Dashboard />,
		'/charts': () => <Charts />,
		'/sentinel': () => <Sentinel />,
		'/widgets': () => <Widgets />,
	}
	const routeResult = useRoutes(routes);
	const handleRoute = (r) => { navigate(r); }
	
	return (
		<AppProvider>
			<AppContext.Consumer>
				{({ slider, setSlider }) => (
					<StyledApp>
						<div id="master-left-column">
							<div id="master-left-column-header">
								<img id="master-left-column-header-logo" src="/images/logo.png" />
								<div id="master-left-column-header-text">pr0con.com</div>
							</div>
							<Sidebar />
						</div>
						<div id="master-right-column">
							<div id="master-right-column-nav">
								<div id="master-right-column-nav-pancake">
									<span></span><span></span><span></span>
								</div>
								<div id="master-right-column-nav-search-wrapper">
									<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-2x"><path fill="currentColor" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path></svg>								
									<input id="master-right-column-nav-search" type="text" placeholder="Search for anything..."/>
								</div>
								<div id="master-right-column-buttons">
									<div id="master-right-column-slider-trigger" onClick={ (e) => setSlider(!slider) }>
										<span></span><span></span><span></span>
									</div>								
								</div>
							</div>
							
							<div id="master-right-column-content">
								{ routeResult }
								<Slider />
							</div>
							
							<div id="master-right-column-status">

							</div>
						</div>
						<Dev />
					</StyledApp>
				)}
			</AppContext.Consumer>
		</AppProvider>	
	)
}

if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root'));
}