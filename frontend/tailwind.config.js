/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        bannercolor :'#d1453b',
        bannerfaded: '#E38F89',
        filtercolor:'#eb8909',
        upcomingcolor: '#692fc2',
        todaycolor:'#058527',
        inboxcolor:'#246fe0',
        sideMenuBackgroundColor:'#fafafa',
        btnColor:'#db4c3f',
        cnclBtnColor:'#f5f5f5',
        btnhovorColor: '#b13d31',
        cnclBtnHoverColor:'#e5e5e5',
        countColor:"#aaa",
      }
    },
    
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-s2cond(Purple|Pink|Orange|Yellow|Lime|Mint|Test|Test2)/
}

]
}
