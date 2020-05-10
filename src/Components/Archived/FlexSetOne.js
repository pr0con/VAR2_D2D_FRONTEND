import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';


/* 
	NOTES
		- default direction is row
		-flex-direction == flex-flow; ( row || column )
		- align-items: stretch is default, only if no element height overrides
		-align-content: This property has no effect on single line flex containers (i.e. ones with flex-wrap: nowrap).
*/

const StyledFlexSetOne = styled.div`
	position: relative; 
	width: 100%;
	height: 100%;
	
	#flex-container-one {
		position: relative;
		margin: 0 auto;
		border: 1px solid #ccc;
		padding: 1rem;
		width: ${(props) => props.containerWidth};
		height:  ${(props) => props.containerHeight};
		display: flex;
		flex-direction: ${(props) => props.flexDirection};
		align-items: ${(props) => props.alignItems};
		justify-content: ${(props) => props.justifyContent};
		align-content: ${(props) => props.alignContent};
		flex-wrap: ${(props) => props.flexWrap};
				
		.flex-item {
			padding: .5rem;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #ccc;
			font-size: 1.2rem;
			min-width: ${(props) => props.flexItemWidth};
			height: ${(props) => props.flexItemHeight};
			
			&.item-${(props) => props.element} {
				order: ${(props) => props.order};
				align-self: ${(props) => props.alignSelf};	
			}						
		}		
	}
		
	#flex-container-one-actions {
		.flex-container-one-actions-section-title:not(:first-child) {
			margin-top: 1rem;
		}
		.flex-container-one-action-row {
			display: flex;
			span {
				margin-right: .5rem;
				min-width: 20rem;
			}
			&:not(:first-child) {
				margin-top: .2rem;
			}
		}			
	}		
`;

export function FlexSetOne() {
	const [ containerWidth, setContainerWidth ] = useState('60rem');
	const [ containerHeight, setContainerHeight ] = useState('30rem');
	const [ flexDirection, setFlexDirection ] = useState('row');
	const [ alignItems, setAlignItems ] = useState('start');
	
	const [ justifyContent, setJustifyContent ] = useState('start');
	const [ alignContent, setAlignContent ] = useState('normal');
	const [ flexWrap, setFlexWrap ] = useState('no-wrap');
	
	
	const [ flexItems, setFlexItems ] = useState([]);
	const [ flexItemWidth, setFlexItemWidth ] = useState('100px');
	const [ flexItemHeight, setFlexItemHeight] = useState('auto');
		
	const [ element, setElement ] = useState('1');
	const [ alignSelf, setAlignSelf ] = useState('start');
	const [ order, setOrder ] = useState('0');			
		
	const createFlexItems = (e) => {
		if(parseInt(e.target.value)) {
			setFlexItems([]);
			for(let i = 1; i <= parseInt(e.target.value); i++) {	
				setFlexItems((f) => [...f, i]);
			}
		} else {
			setFlexItems([]);
		}
	}		
		
	return(
		<StyledFlexSetOne  containerWidth={containerWidth} containerHeight={containerHeight} flexDirection={flexDirection}
						   alignItems={alignItems} flexItemWidth={flexItemWidth} flexItemHeight={flexItemHeight}
						   justifyContent={justifyContent} alignContent={alignContent} flexWrap={flexWrap}
						   element={element} alignSelf={alignSelf} order={order}
		>
			<div id="flex-container-one">
				{ flexItems.length > 0 && flexItems.map((fi) => (
					<div className={`flex-item item-${fi}`}>{ fi }</div>
				))}
			</div>
			
			<div id="flex-container-one-actions">
				<div className="flex-container-one-actions-section-title">Container Settings</div>
				<div className="flex-container-one-action-row"><span>Container Width: </span><input type="text" onChange={(e) => setContainerWidth(e.target.value)} placeholder="Ex. 60rem"/></div>
				<div className="flex-container-one-action-row"><span>Container Height: </span><input type="text" onChange={(e) => setContainerHeight(e.target.value)} placeholder="Ex. 30rem || auto"/></div>				
				<div className="flex-container-one-action-row"><span>Flex Direction: </span>
					<select onChange={(e) => setFlexDirection(e.target.value)}>
						<option value="row">row</option>
						<option value="row-reverse">row-reverse</option>
						<option value="column">column</option>
						<option value="column-reverse">column-reverse</option>
					</select>				
				</div>
				<div className="flex-container-one-action-row"><span>Align Items: </span>
					<select onChange={(e) => setAlignItems(e.target.value)}>
						<option value="start">start</option>
						<option value="center">center</option>
						<option value="stretch">stretch</option>
						<option value="end">end</option>
					</select>
				</div>
				<div className="flex-container-one-action-row"><span>Jusify Content: </span>
					<select onChange={(e) => setJustifyContent(e.target.value)}>
						<option value="start">start</option>
						<option value="center">center</option>
						<option value="end">end</option>
						<option value="flex-start">flex-start</option>
						<option value="flex-end">flex-end</option>
						<option value="left">left</option>
						<option value="right">right</option>
						
						<option value="normal">normal</option>
						<option value="space-between">space-between</option>
						<option value="space-around">space-around</option>
						<option value="space-evenly">space-envely</option>
						<option value="stretch">stretch</option>
					</select>
				</div>				
				<div className="flex-container-one-action-row"><span>Align Content: </span>
					<select onChange={(e) => setAlignContent(e.target.value)}>
						<option value="normal">normal</option>
						<option value="center">center</option>
						<option value="start">start</option>
						<option value="end">end</option>
						<option value="flex-start">flex-start</option>
						<option value="flex-end">flex-end</option>
						<option value="space-between">space-between</option>
						<option value="space-around">space-around</option>
						<option value="space-evenly">space-envely</option>
						<option value="stretch">stretch</option>
					</select>
				</div>					
				<div className="flex-container-one-action-row"><span>Flex Wrap: </span>
					<select onChange={(e) => setFlexWrap(e.target.value)}>
						<option value="no-wrap">no-wrap</option>
						<option value="wrap">wrap</option>
						<option value="wrap-reverse">wrap-reverse</option>
					</select>				
				</div>				
								
			
				<div className="flex-container-one-actions-section-title">Items Settings</div>
				<div className="flex-container-one-action-row"><span>Items Count: </span><input type="text" onChange={(e) => createFlexItems(e)} placeholder="An Integer"/></div>				
				<div className="flex-container-one-action-row"><span>Items Width : </span><input type="text" onChange={(e) => setFlexItemWidth(e.target.value)} placeholder="Ex. 100px" value={flexItemWidth} /></div>
				<div className="flex-container-one-action-row"><span>Items Height: </span><input type="text" onChange={(e) => setFlexItemHeight(e.target.value)} placeholder="Ex. 24px || auto" value={flexItemHeight} /></div>
				
			
				<div className="flex-container-one-actions-section-title">Single Element Settings</div>
				<div className="flex-container-one-action-row"><span>Target Single Element: </span>
					<select onChange={(e) => setElement(e.target.value)}>
						{ flexItems.length > 0 && flexItems.map((fi) => (
							<option value={fi}>{ fi }</option>
						))}				
					</select>
				</div>
				<div className="flex-container-one-action-row"><span>Align Self: </span>
					<select onChange={(e) => setAlignSelf(e.target.value)}>
						<option value="start">start</option>
						<option value="end">end</option>
						<option value="center">center</option>
						<option value="stretch">stretch</option>
					</select>
				</div>
				<div className="flex-container-one-action-row"><span>Order: </span><input type="text" onChange={(e) => setOrder(e.target.value)} placeholder="Integer default(0)"/></div>												
			</div>
		</StyledFlexSetOne>
	)	
}