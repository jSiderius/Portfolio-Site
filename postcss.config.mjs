console.log('🔥 POSTCSS CONFIG LOADED')

import postcssGlobalData from '@csstools/postcss-global-data'
import postcssCustomMedia from 'postcss-custom-media'

export default{
  plugins: [
    postcssGlobalData({
      files: ['./src/postcss/breakpoints.css'],
    }),

    postcssCustomMedia(),
  ],
}
