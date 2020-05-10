import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import ReactJson from 'react-json-view';

import { AppContext } from './AppProvider.js';

const StyledDev = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 0vw;
	height: 0vh;
	overflow: hidden;
	transition: all .2s;
	color: #cccccc;
	background: rgba(1,1,1,1);
	font-size: 1.2rem;	
	&.true {
		width: 100vw;
		height: 100vh;		
	}
`

export function Dev() {
	const appState = useContext(AppContext);
	const { dev } = useContext(AppContext);
	
	return(
		<StyledDev className={dev}>
			<ReactJson src={appState} collapsed={false} theme="apathy"/>
		</StyledDev>
	)
}