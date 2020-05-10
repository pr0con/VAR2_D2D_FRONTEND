import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';


/* 
	NOTES
		- default direction is row
		-flex-direction == flex-flow; ( row || column )
		- align-items: stretch is default, only if no element height overrides
		-align-content: This property has no effect on single line flex containers (i.e. ones with flex-wrap: nowrap).
		
		PARENT PROPERTIES
			-  display
			- flex-direction
			- flex-wrap
			- flex-flw
			- justify-content
			- align-items
			- align-content
			
		CHILD PROPERTIES
			- order
			- flex-grow
			- flex-basis
			- flex-shrink
			- flex
			- algin-self
*/

const StyledFlexSetTwo = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	

	#flex-set-two-container {
		display: flex;
			
		.flex-set-two-item {
			min-height: 10rem;
			border: 1px solid #ccc;
			flex-basis:  ${(props) => props.basis}; 
		}
		
		#flex-two-div-one {
			flex-grow: ${(props) => props.oneGrow};
			flex-shrink: ${(props) => props.oneShrink};
		}
		#flex-two-div-two {
			flex-grow: ${(props) => props.twoGrow};
			flex-shrink: ${(props) => props.twoShrink};
		}
		#flex-two-div-three {
			flex-grow: ${(props) => props.threeGrow};
			flex-shrink: ${(props) => props.threeShrink};
		}					
	}
`;

export function FlexSetTwo() {
	const [ basis, setBasis ] = useState('100px');

	const [ oneGrow, setOneGrow ] = useState('0');	
	const [ twoGrow, setTwoGrow ] = useState('0');
	const [ threeGrow, setThreeGrow ] = useState('0');

	const [ oneShrink, setOneShrink ] = useState('1');
	const [ twoShrink, setTwoShrink ] = useState('1');	
	const [ threeShrink, setThreeShrink ] = useState('1');		

	return(
		<StyledFlexSetTwo basis={basis}
			oneGrow={oneGrow} twoGrow={twoGrow} threeGrow={threeGrow}
			oneShrink={oneShrink} twoShrink={twoShrink}  threeShrink={threeShrink} 
		>
			<div id="flex-set-two-container">
				<div id="flex-two-div-one" className="flex-set-two-item"></div>
				<div id="flex-two-div-two" className="flex-set-two-item"></div>
				<div id="flex-two-div-three" className="flex-set-two-item"></div>
			</div>
			
			<div id="flex-set-two-actions">
				<input type="text" onChange={(e) => setBasis(e.target.value)} value={basis}/>
				
				<input type="text" onChange={(e) => setOneGrow(e.target.value)} value={oneGrow}/>
				<input type="text" onChange={(e) => setTwoGrow(e.target.value)} value={twoGrow}/>
				<input type="text" onChange={(e) => setThreeGrow(e.target.value)} value={threeGrow}/>
				
				<input type="text" onChange={(e) => setOneShrink(e.target.value)} value={oneShrink}/>
				<input type="text" onChange={(e) => setTwoShrink(e.target.value)} value={twoShrink}/>
				<input type="text" onChange={(e) => setThreeShrink(e.target.value)} value={threeShrink}/>
			</div>
		</StyledFlexSetTwo>
	)
}