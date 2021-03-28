import { css } from 'styled-components';

export const SectionStyles = css`
    border-radius: 20px;
	box-shadow: 20px 20px 60px rgb(0 0 0 / 20%), -20px -20px 60px rgb(255 255 255 / 5%);
	padding: 64px 48px;
	width: 900px;
	margin: 80px auto;
	transition: all 0.5s linear;

	@media screen and (max-width: 900px) {
		padding: 40px 20px;
		width: 560px;
	}

	@media screen and (max-width: 600px) {
		padding: 40px 20px;
		width: 335px;
	}
`;

export const darkTheme: Theme = {
	fontColor: 'white',
	secondarFontColor: '#AFB0B3',
	primaryBackground: '#222',
	background: 'linear-gradient(to bottom right, #383838, #1E1E1E)',
	sectionBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#191919 0%,#0a0a0a 100%)',
	secondaryBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#191919 0%,#0a0a0a 100%)',
	border: '#EDEFE7',
	svgFill: 'white',
	highlight: '#5198db',
	imgShadow: 'rgb(0 0 0 / 80%)',
}

export const lightTheme: Theme = {
	fontColor: 'black',
	secondarFontColor: '#525254',
	primaryBackground: '#eee',
	background: 'linear-gradient(to bottom right, #EDEBEF, #A6A7A4)',
	sectionBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#FFFFFF 0%,#F1F1F1 100%)',
	secondaryBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#FFFFFF 0%,#F1F1F1 100%)',
	border: '#32342B',
	svgFill: 'black',
	highlight: '#3B68A9',
	imgShadow: 'rgb(0 0 0 / 5%)',
}

export const colours = {
	hover: '#78A5CE',
	jobTitle: '#878787',
}