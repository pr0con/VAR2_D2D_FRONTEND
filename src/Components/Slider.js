import React, { useContext } from 'react'
import styled from 'styled-components';

import { AppContext } from './AppProvider.js';

const StyledSlider = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	
	width: 0px;
	background: #252525;
	height: 100%;
	overflow: hidden;
	
	transition: all .2s;
	
	&.true {
		width: 30rem;
	}		
`;

export function Slider() {
	const { slider } = useContext(AppContext);
	
	return(
		<StyledSlider className={ slider }>
			Slider
		</StyledSlider>
	)
}