## Explore all the ways of writing css.
A:inline, Internal,extarnal, 
inline:'<p style={{color:"blue"}}>paragraphp</p>'
Internal:const paragraph = {color:"green",fontSize:'20px'}
## How do we configure tailwind?
A: Npm i tailwindcss // install dependencies packages
    create tailwind.config.js 'module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {     }
    },
  },
  plugins: [],
}'
add root css  example: index.css in add 
'@tailwind base;
@tailwind components;
@tailwind utilities;' 
## In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
A: Content:["./**/*.{html,js,ts,jsx,tsx}",] it will check these file types in any add class there will be apply css
theme:dark:{},light:{} inside define object and there add css base on dark and light mode theme.
extend:Add custom color font,other css properties 'extend: {
      colors: {
        'primary':'#fc8019'
        }
        }'

## Why do we have .postcssrc file?
A:Postcssrc is a node.js tool that transform your styles using javascript plugins. it's similar to preprocessor like scss,less and styleus combined. 