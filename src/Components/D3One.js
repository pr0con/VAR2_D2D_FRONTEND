import React, { useRef, useEffect, useContext } from 'react';
import styled  from 'styled-components';
import * as d3 from 'd3';
import { AppContext } from './AppProvider.js'; 


const StyledD3One = styled.div`
`;

export function D3One( ) {
	const d3Ref = useRef(null);
	const { request, hitTotals } = useContext(AppContext);
	
	useEffect(() => {
		if(hitTotals !== null && 'targets' in hitTotals && hitTotals['targets'].length > 0) {	
			console.log('Rendering d3')
			const svg = d3.select(d3Ref.current)
						.append('svg').attr('id','d3-one-master-svg').attr('width', 1010).attr('height', 580)
						.append('g').attr('transform', `translate(70,40)`);
						
			const max = d3.max(hitTotals['targets'], d => {
				return d.hits;
			});
			
			const y = d3.scaleLinear().domain([max, 0]).range([0, 500]);
			const x = d3.scaleBand().domain(hitTotals['targets'].map(d => d.ip)).range([0,800]).padding(0.2);
		
			const xAxisCall = d3.axisBottom(x);
			svg.append('g').attr('transform', `translate(0,500)`).call(xAxisCall);
			
			const yAxisCall = d3.axisLeft(y);
			svg.append('g').call(yAxisCall);
			
			svg.append('text').attr('x', 800 / 2).attr('y', 540).attr('text-anchor','middle').style('fill','#ccc').style('font-size','2rem').text("Most Frequent Attackers.");
			svg.append('text').attr('x', -(500 / 2)).attr('y', -50).attr('text-anchor','middle').style('fill','#ccc').style('font-size','2rem').text("Failed Logins").attr('transform','rotate(-90)');
			
			
			const rects = svg.selectAll('rect').data(hitTotals['targets']);
			rects.enter().append('rect').attr('x', d => x(d.ip)).attr('y', d => y(d.hits)).attr('width', x.bandwidth).attr('height', d => 500 - y(d.hits)).attr('fill', 'grey');																	
		}	
	},[hitTotals])
	
	return(
		<StyledD3One id="D3OneContainer" ref={d3Ref}>
			
		</StyledD3One>
	)
}