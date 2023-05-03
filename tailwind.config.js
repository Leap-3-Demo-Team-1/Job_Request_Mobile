/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screen/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '14': '14 2 0%'
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}

