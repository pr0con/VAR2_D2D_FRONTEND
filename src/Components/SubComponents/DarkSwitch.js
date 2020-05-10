import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider.js';

const DarkSwitchContainer = styled.div`
	width: 100%;
	display:flex;
	flex-direction: row-reverse;
`;


const Input = styled.input`
	margin-right: .5rem;
`;

const Label = styled.label`
	cursor:pointer;
	color: ${({dark}) => (dark ? 'grey':'black')};
`;

export function DarkSwitch() {
	const { dark, setTheme } = useContext(AppContext);
	
	
	return(
		<DarkSwitchContainer>
			<Label dark={dark}>
				<Input type="checkbox" onChange={(e) => setTheme(e.target.checked ? 'dark': 'light')} checked={dark}/>
				Dark Mode
			</Label>
		</DarkSwitchContainer>
	)	
}