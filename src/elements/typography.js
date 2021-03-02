import styled from '@emotion/styled';

export const H5 = styled('h5')`
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Univers Roman', sans-serif;
`;

export const H1 = styled('h1')`
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'Univers Bold Condensed', sans-serif;
  /* color: ${props => (props.mode === 'dark' ? '#F7F7F5' : 'black')}; */
`;

export const HEADING_LARGE = styled('h2')`
  font-size: 56px;
  font-weight: 400;
  font-family: 'Univers Bold Condensed', sans-serif;
  font-stretch: condensed;
  text-transform: uppercase;
  line-height: 0.85em;
  letter-spacing: -0.1vw;
  margin: 0px;

  @media (min-width: 767px) {
    font-size: 8vw;
  }
`;

export const H2 = styled('h2')`
  font-size: 56px;
  font-weight: 400;
  font-family: 'Univers Bold Condensed', sans-serif;
  text-transform: uppercase;
  line-height: 0.85em;
  letter-spacing: -0.2vw;

  @media (min-width: 767px) {
    font-size: 8vw;
  }
`;

export const H3 = styled('h3')`
  font-size: 45px;
  font-weight: 400;
  font-family: 'Univers Bold Condensed', sans-serif;
  text-transform: uppercase;
  line-height: 0.85em;
  letter-spacing: -0.1vw;

  @media (min-width: 767px) {
    font-size: 5vw;
  }
`;

export const H4 = styled('h4')`
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const H6 = styled('h6')`
  font-family: 'Univers Roman';
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  margin: 0px;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (min-width: 1800px) {
    font-size: 28px;
  }
`;

export const P = styled('p')`
  font-size: 16px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (min-width: 1800px) {
    font-size: 28px;
  }
`;
export const SPAN = styled('span')`
  font-size: 16px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (min-width: 1800px) {
    font-size: 28px;
  }
`;
export const LINK = styled('a')`
  font-size: 16px;
  line-height: 1.5;
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (min-width: 1800px) {
    font-size: 28px;
  }
`;
export const SMALL = styled('p')`
  font-family: 'Univers Roman';
  font-size: 26px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (min-width: 1800px) {
    font-size: 28px;
  }
`;

export const Logo = styled('span')`
  font-size: 20px;
  line-height: 1em;
  text-transform: uppercase;
  font-family: 'Univers Bold Condensed', sans-serif;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
