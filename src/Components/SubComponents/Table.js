import React, { useContext } from 'react';
import styled from 'styled-components';
import { medGrey, brandColor} from './GlobalStyles.js';
import { tableRows, tableColumns } from './Data.js';
import { AppContext } from '../AppProvider.js';

//https://github.com/bvaughn/react-virtualized
import { AutoSizer, Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

const ROW_HEIGHT = 48;

const TableCell = styled.div`
	display: flex;
	color: ${({header, dark}) => dark ? (header ? brandColor : '#fff') : '#000'};
	${({align}) => align === 'right' && `flex-direction: row-reverse;`}
`;

class ReactVirtualizedTable extends React.Component {
	headerRenderer = ({ label, columnIndex }) => {
		const { columns, dark } = this.props;
		return(
			<TableCell header align={ columns[columnIndex].numeric ? 'right': 'left' } dark={dark}>
				{ label }
			</TableCell>
		)
	}
	
	cellRenderer = ({ cellData, columnIndex }) => {
		const { columns, dark } = this.props;
		return(
			<TableCell align={ columns[columnIndex].numeric ? 'right': 'left' } dark={dark}>
				{ cellData }
			</TableCell>
		)	
	};
	
	
	
	render() {
		const { columns } = this.props;
		return(
			<AutoSizer>
				{({ height, width }) => (
					<Table  height={height} width={width} rowHeight={ROW_HEIGHT} headerHeight={ROW_HEIGHT} rowCount={tableRows.length} rowGetter={({index}) => tableRows[index]}  
							rowStyle={{borderBottom: `1px solid ${medGrey}`, boxSizing: 'border-box'}}
					>
						{ columns.map(({dataKey, ...other}, index) => {
							return <Column key={dataKey} dataKey={dataKey} {...other} headerRenderer={ headerProps => this.headerRenderer({...headerProps, columnIndex: index  })} cellRenderer={this.cellRenderer} />
						})}
					</Table>	
				)}
			</AutoSizer>	
		)
	}
}

import { Wrapper } from './Wrapper.js';

export function VirtualizedTable() {
	const { dark } = useContext(AppContext);
	
	return(
		<Wrapper height={400} dark={dark}>
			<ReactVirtualizedTable columns={tableColumns} dark={dark} />
		</Wrapper>
	)
}