const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June', 
	'July', 
	'August', 
	'September', 
	'October', 
	'November', 
	'December'
]

function generateData(count, start, growth) {
	const data = [];
	for(let i = 0; i < count; i++) {
		data.push(Math.floor(start + Math.random() * i * growth));
	}
	return data;
}

export const chartData = [{
	name: 'John',
	data: generateData(12,30,5),
	color: '#149947',	
}, {
	name: 'Jane',
	data: generateData(12,10,.2),
	color: '#1dda65',		
}, {
	name: 'Joe',
	data: generateData(12,6,.3),
	color: '#5cf396',		
}, {
	name: 'Bob',
	data: generateData(12,5,.5),
	color: '#c1fad7',		
}]


function format(num) {
	return `$${num} Billion`;
}

export const tableRows = months.map((month, i) => ({
	month,
	phones:   format(chartData[0].data[i]),
	services: format(chartData[1].data[i]),
	laptops:  format(chartData[2].data[i]),
	tablets:  format(chartData[3].data[i]),
}));

export const tableColumns = [
	{
		width: 240,
		label: 'Month',
		dataKey: 'month',
	},
	{
		width: 240,
		label: 'Phones',
		dataKey: 'phones',
		numeric: true,		
	}, 
	{
		width: 240,
		label: 'Services',
		dataKey: 'services',
		numeric: true,			
	},	
	{
		width: 240,
		label: 'Laptops',
		dataKey: 'laptops',
		numeric: true,			
	},
	{
		width: 240,
		label: 'Tablets',
		dataKey: 'tablets',
		numeric: true,			
	}
]


