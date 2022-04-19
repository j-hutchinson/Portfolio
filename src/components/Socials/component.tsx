import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    StyledList,
    StyledListItem,
    StyledLink,
    StyledI,
    StyledSpanLarge,
    StyledSpan,
    StyledSpanGithub
} from './Socials.styles';

export const Socials: React.FC = (): JSX.Element => (
    <StyledList >
        <StyledListItem>
            <StyledLink href="https://github.com/j-hutchinson" target="_blank" rel="noopener noreferrer" aria-label="Jack's Github">
                <StyledI aria-hidden="true"></StyledI>
                <StyledSpanGithub>
                    <FontAwesomeIcon icon={faGithub} />
                </StyledSpanGithub>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://twitter.com/jack_hutchy" target="_blank" rel="noopener noreferrer" aria-label="Jack's Twitter">
                <StyledI aria-hidden="true" ></StyledI>
                <StyledSpanLarge>
                    <FontAwesomeIcon icon={faTwitter} />
                </StyledSpanLarge>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://instagram.com/jack_hutchy" target="_blank" rel="noopener noreferrer" aria-label="Jack's Instagram">
                <StyledI aria-hidden="true"></StyledI>
                <StyledSpan>
                    <FontAwesomeIcon icon={faInstagram} />
                </StyledSpan>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://linkedin.com/in/jack-hutchinson-dev" target="_blank" rel="noopener noreferrer" aria-label="Jack's LinkedIn">
                <StyledI aria-hidden="true"></StyledI>
                <StyledSpan>
                    <FontAwesomeIcon icon={faLinkedin} />
                </StyledSpan>
            </StyledLink>
        </StyledListItem>
    </StyledList>
);
