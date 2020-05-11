import React, {useContext} from 'react';
import styled from 'styled-components';
import { medGrey, darkerGrey } from './GlobalStyles.js';

export const Wrapper = styled.div`
	padding: 2rem;
	margin-top: 2rem;
	
	background-color: ${({dark}) => dark ? darkerGrey : '#fff'};
	border: 1px solid #000;
	
	box-shadow: 0px 3px 5px ${({dark}) => dark ? '#000' : medGrey};
	box-sizing: border-box;
	
	${({height}) => height && `height: ${height}px;`}
`;