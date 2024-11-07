/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '8px': '8px',
        '20px': '20px',
      },
      width: {
        '20px': '20px',
        '8px': '8px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        uiColorRed: '#f6374e',
        uiColorGreen: '#22b867',
        uiColorBlue: '#4d76f1',
        uiColorYellow: '#f3a100',
        uiColorGrey: '#dde1e3',
        uiColorWhite: '#ffffff',
        uiColorBlack: '#000000',
        uiColorNearWhite: '#f2f2f2',

        uiColorPrimary: '#00172f',
        uiColorSecondary: '#8f9ea4',
        uiColorDark: '#212f42',

        uiColorBlack10: 'rgba(0, 0, 0, 0.1)',
        uiColorBlack50: 'rgba(0, 0, 0, 0.5)',

        uiColorSecondary10: 'rgba(143, 158, 164, 0.1)',
        uiColorSecondary20: 'rgba(143, 158, 164, 0.2)',
        uiColorSecondary40: 'rgba(143, 158, 164, 0.4)',
        uiColorSecondary60: 'rgba(143, 158, 164, 0.6)',

        uiColorBlue10: 'rgba(77, 118, 241, 0.1)',
        uiColorBlue20: 'rgba(77, 118, 241, 0.2)',
        uiColorBlue40: 'rgba(77, 118, 241, 0.4)',
        uiColorBlue60: 'rgba(77, 118, 241, 0.6)',

        uiColorGreen10: 'rgba(34, 184, 103, 0.1)',
        uiColorGreen20: 'rgba(34, 184, 103, 0.2)',
        uiColorGreen40: 'rgba(34, 184, 103, 0.4)',
        uiColorGreen60: 'rgba(34, 184, 103, 0.6)',

        uiColorRed10: 'rgba(246, 55, 78, 0.1)',
        uiColorRed20: 'rgba(246, 55, 78, 0.2)',
        uiColorRed40: 'rgba(246, 55, 78, 0.4)',
        uiColorRed60: 'rgba(246, 55, 78, 0.6)',

        uiColorYellow10: 'rgba(243, 161, 0, 0.1)',
        uiColorYellow20: 'rgba(243, 161, 0, 0.2)',
        uiColorYellow40: 'rgba(243, 161, 0, 0.4)',
        uiColorYellow60: 'rgba(243, 161, 0, 0.6)',

        uiColorPrimary10: 'rgba(0, 23, 47, 0.1)',
        uiColorPrimary20: 'rgba(0, 23, 47, 0.2)',
        uiColorPrimary40: 'rgba(0, 23, 47, 0.4)',
        uiColorPrimary60: 'rgba(0, 23, 47, 0.6)',

        uiColorWhite10: 'rgba(255, 255, 255, 0.1)',
        uiColorWhite20: 'rgba(255, 255, 255, 0.2)',
        uiColorWhite40: 'rgba(255, 255, 255, 0.4)',
        uiColorWhite60: 'rgba(255, 255, 255, 0.6)',
        uiColorWhite80: 'rgba(255, 255, 255, 0.8)',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
