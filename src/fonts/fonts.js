import React from 'react';
import { Global, css } from '@emotion/core';
import IntroRegular from './Intro-Regular.woff';
import IntroRegularWoff2 from './Intro-Regular.woff2';
import IntroRegularAlt from './Intro-RegularAlt.woff';
import IntroRegularAltWoff2 from './Intro-RegularAlt.woff2';
import IntroMedium from './Intro-Medium.woff';
import IntroMediumWoff2 from './Intro-Medium.woff2';
import IntroMediumAlt from './Intro-MediumAlt.woff';
import IntroMediumAltWoff2 from './Intro-MediumAlt.woff2';
import IntroSemiBold from './Intro-SemiBold.woff';
import IntroSemiBoldWoff2 from './Intro-SemiBold.woff2';
import IntroSemiBoldAlt from './Intro-SemiBoldAlt.woff';
import IntroSemiBoldAltWoff2 from './Intro-SemiBoldAlt.woff2';
import IntroBoldAlt from './Intro-BoldAlt.woff';
import IntroBoldAltWoff2 from './Intro-BoldAlt.woff2';

const GlobalFonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Intro Regular';
        src: local('Intro Regular'), url(${IntroRegularWoff2}) format('woff2'),
          url(${IntroRegular}) format('woff');
      }

      @font-face {
        font-family: 'Intro Regular Alt';
        src: local('Intro Regular Alt'),
          url(${IntroRegularAltWoff2}) format('woff2'),
          url(${IntroRegularAlt}) format('woff');
      }

      @font-face {
        font-family: 'Intro Medium';
        src: local('Intro Medium'), url(${IntroMediumWoff2}) format('woff2'),
          url(${IntroMedium}) format('woff');
      }

      @font-face {
        font-family: 'Intro Medium Alt';
        src: local('Intro Medium Alt'),
          url(${IntroMediumAltWoff2}) format('woff2'),
          url(${IntroMediumAlt}) format('woff');
      }

      @font-face {
        font-family: 'Intro SemiBold';
        src: local('Intro SemiBold'), url(${IntroSemiBoldWoff2}) format('woff2'),
          url(${IntroSemiBold}) format('woff');
      }

      @font-face {
        font-family: 'Intro SemiBold Alt';
        src: local('Intro SemiBold Alt'),
          url(${IntroSemiBoldAltWoff2}) format('woff2'),
          url(${IntroSemiBoldAlt}) format('woff');
      }

      @font-face {
        font-family: 'Intro SemiBold';
        src: local('Intro SemiBold'), url(${IntroSemiBoldWoff2}) format('woff2'),
          url(${IntroSemiBold}) format('woff');
      }

      @font-face {
        font-family: 'Intro Bold Alt';
        src: local('Intro Bold Alt'), url(${IntroBoldAltWoff2}) format('woff2'),
          url(${IntroBoldAlt}) format('woff');
      }

      html,
      body {
        font-family: 'Intro Regular';
        font-size: 16px;
      }
    `}
  />
);

export default GlobalFonts;
