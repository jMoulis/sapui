import { css } from '@emotion/core';
import QuickSandRegular from 'assets/fonts/Quicksand-Regular.ttf';
import QuickSandLight from 'assets/fonts/Quicksand-Light.ttf';
import QuickSandBold from 'assets/fonts/Quicksand-Bold.ttf';
import SapUiIcons from 'assets/fonts/SAP-icons.ttf';

export default css`
  @font-face {
    font-family: 'quicksand';
    src: url('${QuickSandRegular}') format('truetype');
  }
  @font-face {
    font-family: 'quicksand-bold';
    src: url('${QuickSandBold}') format('truetype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'quicksand-light';
    src: url('${QuickSandLight}') format('truetype');
  }
  @font-face {
    font-family: 'quicksand-medium';
    src: url('${QuickSandLight}') format('truetype');
  }
  @font-face {
    font-family: 'sapui-icons';
    src: url('${SapUiIcons}') format('truetype');
  }}
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'quicksand', sans-serif;
  }
  html {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    font-size: 1.5rem;
    height: inherit;
  }
  #root {
    display: flex;
    height: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .ql-editor .ql-size-huge {
    font-size: 10rem;
  }
  .ql-font-quicksand {
    font-family: 'quicksand', sans-serif;
    font-weight: 400;
  }
  .ql-font-baloo {
    font-family: 'Baloo Thambi', cursive;
  }
  .ql-font span[data-label='quicksand']::before {
    font-family: 'quicksand';
  }
  .ql-font span[data-label='Baloo']::before {
    font-family: 'Baloo Thambi';
  }
`;
