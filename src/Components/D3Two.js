import React, { useRef, useEffect, useState, useContext } from 'react';
import styled  from 'styled-components';
import * as d3 from 'd3';
import { AppContext } from './AppProvider.js'; 
import useInterval from './Hooks/useInterval.js';

const StyledD3Two = styled.div`
`;

export function D3Two( ) {
	const d3Ref = useRef(null);
	const { rs, request, cpu } = useContext(AppContext);	
	
	
	const [ init, setInit ] = useState(false);
	const [ svg, setSvg ] = useState(null);
		
	useInterval(() => {
		console.log('hello');
		if(rs === 1) {
	    	request('^vAr^','request-system-cpu-usage','noop');
	    }
	}, 2000);
		
	useEffect(() => {
		if(!init) {
			let svg_ = d3.select(d3Ref.current)
					.append('svg').attr('id','d3-two-master-svg').attr('width', 1010).attr('height', 580)
					.append('g').attr('transform', `translate(70,40)`);	
					
			svg_.append('text').attr('x', 800 / 2).attr('y', 540).attr('text-anchor','middle').style('fill','#ccc').style('font-size','2rem').text("CPU Usage");
			svg_.append('text').attr('x', -(500 / 2)).attr('y', -50).attr('text-anchor','middle').style('fill','#ccc').style('font-size','2rem').text("1 5 15 minutes").attr('transform','rotate(-90)');
					
				
			svg_.xAxisGroup = svg_.append('g').attr('transform', `translate(0,500)`);
			svg_.yAxisGroup = svg_.append('g');		
					
			setSvg(svg_);
			setInit(true);			
		}
		if(init && cpu.length > 0) {
			const min = d3.min(cpu, d => {
				return d.value;
			});
						
			const max = d3.max(cpu, d => {
				return d.value;
			});	
	
			
			const y = d3.scaleLinear().domain([max, min]).range([min, 500]);
			const x = d3.scaleBand().domain(cpu.map(d => d.label)).range([min,800]).padding(.2);
		
			const xAxisCall = d3.axisBottom(x);
			svg.xAxisGroup.transition().duration(500).call(xAxisCall);
			
			const yAxisCall = d3.axisLeft(y);
			svg.yAxisGroup.transition().duration(500).call(yAxisCall);
					
			const rects = svg.selectAll('rect').data(cpu);
			rects.exit().transition().duration(500).remove()
			
			rects.transition().duration(500)
			.attr('x', d => x(d.label)).attr('y', d => y(d.value)).attr('width', x.bandwidth).attr('height', d => 500 - y(d.value)); //Updater line... 			
			
			rects.enter().append('rect')
			.transition().duration(500)
			.attr('y', 460)	
			.attr('x', d => x(d.label)).attr('y', d => y(d.value)).attr('width', x.bandwidth).attr('height', d => 500 - y(d.value))
			.attr('fill', 'grey');					
		}
	},[cpu])	
		
	return(
		<StyledD3Two id="D3TwoContainer" ref={d3Ref}>
			
		</StyledD3Two>
	)
}