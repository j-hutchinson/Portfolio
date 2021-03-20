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
	box-shadow: 20px 20px 60px rgb(0 0 0 / 50%), -20px -20px 60px rgb(255 255 255 / 5%);
	color: white;
	padding: 64px 48px;
	max-width: 980px;
	margin: 80px auto;

	@media screen and (max-width: 980px) {
		padding: 40px 20px;
		width: 560px;
	}

	@media screen and (max-width: 600px) {
		padding: 40px 20px;
		width: 335px;
	}
`;