import { createGlobalStyle } from 'styled-components';
import TekoBold from './Teko-Bold.ttf';
import TekoLight from './Teko-Light.ttf';
import TekoMedium from './Teko-Medium.ttf';
import TekoRegular from './Teko-Regular.ttf';
import TekoSemiBold from './Teko-SemiBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Teko-Bold';
    src: url(${TekoBold}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Teko-Light';
    src: url(${TekoLight}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Teko-Medium';
    src: url(${TekoMedium}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Teko-Bold';
    src: url(${TekoRegular}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Teko-SemiBold';
    src: url(${TekoSemiBold}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  body, html {
    font-family: 'Teko-Regular';
    font-size: 1rem;
  }
`