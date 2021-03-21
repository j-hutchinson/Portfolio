import { css } from 'styled-components';

export const SectionStyles = css`
    border-radius: 20px;
	box-shadow: 20px 20px 60px rgb(0 0 0 / 50%), -20px -20px 60px rgb(255 255 255 / 5%);
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

export const darkTheme = {
	fontColor: 'white',
	primaryBackground: '#222',
	background: 'linear-gradient(to bottom right, #383838, #1E1E1E)',
	sectionBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#191919 0%,#0a0a0a 100%)',
	secondaryBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#191919 0%,#0a0a0a 100%)',
	border: '#EDEFE7',
}

export const lightTheme = {
	fontColor: 'black',
	primaryBackground: '#eee',
	background: 'linear-gradient(to bottom right, #EDEBEF, #A6A7A4)',
	sectionBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#FFFFFF 0%,#F1F1F1 100%)',
	secondaryBackground: 'radial-gradient(118.99% 670.46% at -7.06% -9.5%,#FFFFFF 0%,#F1F1F1 100%)',
	border: '#32342B',
}

export const colours = {
	hover: '#78A5CE',
	highlight: '#3B70A2',
	jobTitle: '#878787',
}