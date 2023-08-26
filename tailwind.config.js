/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '3xs': '330px',
      '2xs': '390px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      'md-max': {max:'767px'},
      lg: '1024px',
      'lg-max': {max:'1023px'},
      xl: '1200px',
      'xl-max': {max:'1199px'},
      '2xl': '1440px',
      '3xl': '1536px'
    },
    fontSize : {
      xs:   ['12px', { lineHeight: '18px'}],
      'xs_0.5': ['13px',{ lineHeight: '20px'}],
      sm:   ['14px', { lineHeight: '22px'}],
      base: ['16px', { lineHeight: '26px'}],
      lg:   ['18px', { lineHeight: '28px'}],
      xl:   ['20px', { lineHeight: '28px'}],
      '2xl':['24px', { lineHeight: '32px'}],
      '3xl':['30px', { lineHeight: '36px'}],
      '4xl':['40px', { lineHeight: '50px'}],
      '5xl':['48px', { lineHeight: '58px'}],
      '6xl':['50px', { lineHeight: '56px'}],
    },
    container : {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '24px',
        xl: '32px'
      },
    },
    fontFamily : {
      default :  ['Poppins','sans-serif'],
    },
    extend: {
      colors : {
        primary : '#FF7D01',
        'oragen':'#F4A11A',
        'blue1': '#5A73E5',
        'blue2':'#049EFF',
        'cl_heading': '#051441',
        'cl_bg': '#F4F7FD',
        'cl_text': '#5D677E',
        'cl_nav': '#635F85',
        'bg-footer': '#052347',
        'text_10': '#101D48',
        'text_7f': '#7F8EA1',
        'text_6b': '#6B7D92',
        'text_79': '#79899D',
        'text_81': '#8189A3',
        'text_6d': '#6D7F94',
        'text_78': '#787E86',
        'text_footer' : '#AFACCD',
        'text_copyright': '#8B9FCF',
        'cl_border' : '#E7E7E7',
        'heading_footer': '#D9E1F0'
      },
      maxWidth : {
        xs:'436px',
        sm:'500px',
        md: '704px',
        lg: '925px',
        xl: '1120px'

      }
    },
},
}

