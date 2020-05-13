import React from 'react'
import styled from 'styled-components';
import { navigate } from 'hookrouter'; //export this for use everywhere


const StyledSidebar = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	
	display: flex;
	flex-direction: column;
	
	.sidebar-button {
		display: flex;
		flex-direction: row;
		height: 4rem;
		align-items: center;
		
		svg {
			width: 2rem;
			height: 2rem;
			color: #e84d3d;
		}
		.sidebar-button-text {
			color: #fff;
			font-size: 1.4rem;
			margin-left: 1rem;
		}
		
		&:hover {
			cursor:pointer;
		}
	}
	
	margin: 1rem 2rem 0 2rem;
	
`;


export function Sidebar() {
	return(
		<StyledSidebar>
			<div className="sidebar-button" onClick={ (e) => navigate('/') }>
				<span className="sidebar-button-icon">
					<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-home fa-w-18 fa-2x"><path fill="currentColor" d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z" ></path></svg>				
				</span>
				<span className="sidebar-button-text">Dashboard</span>
			</div>
			<div className="sidebar-button" onClick={ (e) => navigate('/charts') }>
				<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chart-area" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-chart-area fa-w-16 fa-2x"><path fill="currentColor" d="M500 416c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v340h468zM372 162l-84 54-86.5-84.5c-5.1-5.1-13.4-4.6-17.9 1L64 288v96h416l-90.3-216.7c-3-6.9-11.5-9.4-17.7-5.3zM96 299.2l98.7-131.3 89.3 89.3 85.8-57.2 61.7 152H96v-52.8z"></path></svg>			
				<span className="sidebar-button-text">Charts</span>
			</div>
			<div className="sidebar-button" onClick={ (e) => navigate('/sentinel') }>
				<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="spider-web" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-spider-web fa-w-18 fa-2x"><path fill="currentColor" d="M571.62 245.02C509.87 179.63 464.12 98.93 439.4 11.65c-2.37-8.33-10.84-13.3-19.31-11.16-86.44 21.78-177.75 21.78-264.18 0-8.5-2.11-16.94 2.83-19.31 11.16C111.88 98.93 66.13 179.63 4.38 245.02c-5.84 6.16-5.84 15.81 0 21.97 61.75 65.39 107.5 146.09 132.22 233.37 2.37 8.31 10.81 13.23 19.31 11.16 86.44-21.78 177.75-21.78 264.18 0 1.31.33 2.62.48 3.91.48 7 0 13.41-4.61 15.41-11.64 24.72-87.28 70.47-167.98 132.22-233.37 5.83-6.16 5.83-15.81-.01-21.97zm-46.23-5.01h-69.84c-31.47-35.4-55.14-77.87-69.23-123.78l34.42-60.24c23.74 67.2 59.24 129.67 104.65 184.02zm-264.97 0h-98.7a366.476 366.476 0 0 0 48.97-87.02l49.73 87.02zm-23.85-106.28c34.09 5.26 68.77 5.26 102.86 0l-51.43 90-51.43-90zm23.85 138.28l-49.73 87.02a366.476 366.476 0 0 0-48.97-87.02h98.7zM288 288.28l51.43 90.01c-17.04-2.63-34.2-4.38-51.43-4.38s-34.39 1.75-51.43 4.38L288 288.28zm27.58-16.27h98.69a366.824 366.824 0 0 0-48.97 87.02l-49.72-87.02zm0-32l49.73-87.02c12.33 31.22 28.83 60.51 48.97 87.02h-98.7zm78.43-201.79L360.3 97.21c-47.38 11.59-97.21 11.59-144.59 0L182 38.22a573.332 573.332 0 0 0 212.01 0zM155.26 55.99l34.42 60.24c-14.1 45.92-37.77 88.38-69.23 123.78H50.61c45.41-54.35 80.91-116.82 104.65-184.02zM50.61 272.01h69.84c31.47 35.4 55.14 77.87 69.23 123.78l-34.42 60.24c-23.74-67.2-59.24-129.68-104.65-184.02zM182 473.79l33.71-58.99c47.38-11.59 97.21-11.59 144.59 0l33.7 58.99c-35-6.59-70.44-10.61-106-10.61s-71.01 4.02-106 10.61zm238.74-17.77l-34.42-60.24c14.1-45.92 37.77-88.38 69.23-123.78h69.84c-45.41 54.35-80.91 116.83-104.65 184.02z"></path></svg>				
				<span className="sidebar-button-text">Sentinel</span>
			</div>	
			
			<div className="sidebar-button" onClick={ (e) => navigate('/d3one') }>
				<span className="sidebar-button-text">D3 One</span>
			</div>				
			<div className="sidebar-button" onClick={ (e) => navigate('/d3two') }>
				<span className="sidebar-button-text">D3 Two</span>
			</div>		
							
			<div className="sidebar-button" onClick={ (e) => navigate('/widgets') }>
				<span className="sidebar-button-icon">
					<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-cog fa-w-16 fa-2x"><path fill="currentColor" d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" ></path></svg>			
				</span>
				<span className="sidebar-button-text">Widgets</span>
			</div>	
		</StyledSidebar>
	)
}