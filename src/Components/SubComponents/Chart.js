import React, {useContext} from 'react';
import { AppContext } from '../AppProvider.js';
import { lightGrey, darkerGrey } from './GlobalStyles.js';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'

import { chartData } from './Data.js';

function getOptions(dark) {
	return {
		chart:  {
			type: 'column',
			height: '350px',
			style: {
				fontFamily: `'Blinker', sans-serif`,
			},
			backgroundColor: dark ? darkerGrey : '#fff',
		},
		title: {
	        text: 'Stacked column chart',
	        style: {
	       		color: dark ? lightGrey : 'black',
	       	}
	    },
	    xAxis: {
		    labels: {
			    style: {
				  color: dark ? lightGrey : 'black', 
			    }
		    },
	        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Billions of dollars',
			    style: {
				  color: dark ? lightGrey : 'black', 
			    }	            
	        },
	        reversedStacks: false,
	    },
		legend: {
			itemStyle: {
				color: dark ? lightGrey : 'black', 
			}
		},
	    tooltip: {
	        headerFormat: '<b>{point.x}</b><br/>',
	        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
	        backgroundColor: dark ? darkerGrey : '#fff',
	        style: { 
		        color: dark ? lightGrey : '#000',
	        }
	    },
	    plotOptions: {
		    series: {
			    borderWidth: 0,
		    },
	        column: {
	            stacking: 'normal',
	        }
	    },
	    series: chartData,
	    
	}
}


import { Wrapper } from './Wrapper.js';



export function Chart() {
	const { dark } = useContext(AppContext);
	
	return(
		<Wrapper height={400} dark={dark}>
			<HighchartsReact highcharts={Highcharts} options={getOptions(dark)} />
		</Wrapper>
	)
}