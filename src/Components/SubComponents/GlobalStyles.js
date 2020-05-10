import styled, { createGlobalStyle } from 'styled-components';

export const black      = '#252020';
export const darkGrey   = '#515263';
export const medGrey    = '#dad9d9';
export const lightGrey  = '#f7f7f7';
export const brandColor = '#1dda64';
export const darkerGrey = '#353131';

export const GlobalStyles = createGlobalStyle`
	#charts001 {
		color: ${darkGrey};
		background-color: ${({dark}) => dark ? black : lightGrey};
				
		#charts-center-display-title {
			${({dark}) => (dark && `color: ${brandColor};`)};
		}
	}
`;