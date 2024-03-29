import { Socials } from '../Socials';
import space from './spaceman.jpg';
import {
    StyledWrapper,
    StyledText,
    StyledTextContainer,
    StyledHeading,
    StyledH2,
    StyledPara,
    StyledLink,
    StyledImg
} from './Introduction.styles';

export const Introduction: React.FC = (): JSX.Element => (
    <StyledWrapper>
        <StyledText>
            <StyledTextContainer>
                <StyledHeading>Jack Hutchinson</StyledHeading>
                <StyledH2>
                    Senior Front end engineer at{' '}
                    <StyledLink href="https://tray.io" target="_blank" rel="noopener noreferrer">
                        Tray.io
                    </StyledLink>
                </StyledH2>
                <StyledPara>
                    Building reliable and scalable systems by day. Leveraging technology to launch fully featured products by night.
                    Design systems · Developer Experience · Javascript
                </StyledPara>
                <Socials />
            </StyledTextContainer>
            <StyledImg
                alt="Spaceman"
                height="480px"
                width="343px"
                src={space}
                loading="lazy" />
        </StyledText>
    </StyledWrapper >
);
