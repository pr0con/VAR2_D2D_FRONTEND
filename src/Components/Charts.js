import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './AppProvider.js';
import { GlobalStyles } from './SubComponents/GlobalStyles.js';

const StyledCharts = styled.div`
	position: absolute;
	top:0px;
	left: 0px;
	 
	width: 100%;
	height: 100%;
	
	background: #f7f7f7;
	
	#charts-center-display {
		position: relative;
		width: 120rem;
		margin: auto;
		padding-bottom: 2rem;
		
		#charts-center-display-title {
			font-size: 3rem;
			font-weight: 400;
			margin-top: 2rem;			
		}
		
		@media (max-width: 1440px) {
			margin: 4rem 2rem;
			width: calc(100% - 4rem);
		}				
	}
	
	overflow: scroll;	
`;

import { DarkSwitch } from './SubComponents/DarkSwitch.js';
import { Chart } from './SubComponents/Chart.js';
import { VirtualizedTable } from './SubComponents/Table.js';


export function Charts() {
	const { dark } = useContext(AppContext);
	
	return(
		<>
			<GlobalStyles dark={dark}/>		
			<StyledCharts id="charts001">
				<div id="charts-center-display">
					<div id="charts-center-display-title">Pr0con.io</div>
					<DarkSwitch />
					<Chart />
					<VirtualizedTable />
				</div>
			</StyledCharts>
		</>
	)
}