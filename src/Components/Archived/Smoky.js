import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';



const createLIS = (delay,length) => {
	let xtra_css = '';
	for(let i = 1; i <= length; i++) {	
		xtra_css += `
			li:nth-child(${i}) {
				transition-delay: ${(i * delay) - delay}s;
			}
		`; 		
	}

	return css`${xtra_css}`;
}

const StyledSmoky = styled.div`
	position: relative;
	top: 10rem;
	left: 10rem;

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		
		li {
			list-style:none;
			font-size: 10rem;
			font-weight: bold;
			letter-spacing: 10px;
			transition: ${(props) => props.transition};
		}
		&:hover {
			li {
				transform: rotate(45deg) translateY(-20rem);
				opacity: 0;
				filter: blur(20px);
			}
			${(props) => props.list}
		}						
	}
`;


export function Smoky({ text, transition = '2s' }) {
	const [data, setData] = useState([]);
	const [ list, setList ] = useState();	
	
	useEffect(() => {
		setData(text.split(""));
		let delay = 2 / text.length;
		console.log(delay);
		
		
		let ulliscss = createLIS(delay, text.length);
		setList(ulliscss);
	},[text]);
	
	
	
	/*
	useEffect(() => {
		console.log(data);
	},[data])
	*/
	
	return(
		<StyledSmoky list={list} transition={transition}>
			<ul>
				{ data.length > 0 && data.map((el) => (
					<li>{ el }</li>
				))}
			</ul>
		</StyledSmoky>
	)
}