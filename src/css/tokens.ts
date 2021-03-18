import { css } from 'styled-components';

export const spacing = {
	xlarge: '60px',
	large: '40px',
	medium: '20px',
	small: '10px'
};


export const colours = {
	red: '#ffa69e',
	yellow: '#faf3dd',
	green: '#b8f2e6',
	blue: '#aed9e0',
	darkBlue: '#5e6472'
}

export const SectionStyles = css`
	background: #191919;  
	border-radius: 20px;
	color: white;
	min-height: 640px;
	margin-bottom: 64px;
	padding: 36px 64px;

	@media screen and (max-width: 600px) {
		padding: 24px 32px;
		gap: 0px;
		height: 900px;
	}
`;