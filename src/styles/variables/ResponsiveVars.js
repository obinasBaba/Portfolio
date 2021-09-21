import { css } from 'styled-components'

export const responsiveVars = css`
  :root {
    --indent: 1; // for margin and padding
    --indent-high: 1;
    --title: 1; // for title font-size
    --text: 1; // for regular text which size less than 20px font-size
    --size: 1; // for element width, height
    --column-width: 100vw / 64; // column width

    //fonts
    --sofia-soft: 'Sofia Pro Soft', sans-serif;
    --sofia-pro: 'Sofia Pro', sans-serif;
    --gramatika: 'Gramatika', sans-serif;
    --abyss: 'abyssopelagic', sans-serif;
    --poppins: 'Poppins Black', sans-serif;
    --eli: 'Elianto-Regular', sans-serif;
    


    @media screen and (max-width: 1025px) {
      --indent-high: 0.9;
      --title: 0.9;
      --text: 0.9;
    }

    @media screen and (max-width: 768px) {
      --indent: 0.7;
      --indent-high: 0.6;
      --title: 0.8;
      --size: 0.8;
      --text: 0.8;

    }
    @media screen and (max-width: 576px) {
      --indent: 0.5;
      --indent-high: 3.5;
      --title: 0.6;
      --size: 0.7;
    }

    @media screen and (min-width: 1600px) {
      --indent: 1.25;
      --title: 1.25;
      --text: 1.25;
      --size: 1.25;
    }
  }
`

export const webKitInputReset = css`
  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {

    appearance: none !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;

    -webkit-box-shadow: none !important;

    -webkit-text-fill-color: #a4b5c0 !important;

  }


  @-webkit-keyframes autofill {
    0%,100% {
      color: #666;
      background: transparent;
    }
  }

  input:-webkit-autofill {
    -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }
`
