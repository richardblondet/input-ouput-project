import { darken, lighten, modularScale, shade, tint } from 'polished';
import { FontFamily, PresetTheme, Space, ThemeColors } from '../store/types';

/**
* Chaeban templete
*/
export const palette = {
  froly: '#f2817b',
  smaltBlue: '#4C8D94',
  darkWhite: '#fffffe',
  red: '#e96d62',
  yellow: '#f7c377',
  green: '#65d0a6',
  blue: '#17a2b8',
};

const {
  froly: primary,
  smaltBlue: secondary,
  darkWhite: white,
  red,
  yellow,
  green,
  blue,
} = palette;

// /** Created a type spec for the colors */
export const colors: ThemeColors = {
  primary,
  secondary,
  white,
  red,
  yellow,
  green,
  blue,
  'tertiary': '#572917',
  'primary-lightened': lighten(0.25, primary),
  'primary-darkened': darken(0.25, primary),
  'secondary-lightened': lighten(0.25, secondary),
  'secondary-darkened': darken(0.25, secondary),
  'primary-shades': {
    100: shade(1*0.1, primary),
    200: shade(2*0.1, primary),
    300: shade(3*0.1, primary),
    400: shade(4*0.1, primary),
    500: shade(5*0.1, primary),
    600: shade(6*0.1, primary),
    700: shade(7*0.1, primary),
    800: shade(8*0.1, primary),
    900: shade(9*0.1, primary)
  },
  'primary-tints': {
    100: tint(9*0.105, secondary),
    200: tint(8*0.105, secondary),
    300: tint(7*0.105, secondary),
    400: tint(6*0.105, secondary),
    500: tint(5*0.105, secondary),
    600: tint(4*0.105, secondary),
    700: tint(3*0.105, secondary),
    800: tint(2*0.105, secondary),
    900: tint(1*0.105, secondary)
  },
  'secondary-shades': {
    100: shade(1*0.05, lighten(0.15, secondary)),
    200: shade(2*0.05, lighten(0.15, secondary)),
    300: shade(3*0.05, lighten(0.15, secondary)),
    400: shade(4*0.05, lighten(0.15, secondary)),
    500: shade(5*0.05, lighten(0.15, secondary)),
    600: shade(6*0.05, lighten(0.15, secondary)),
    700: shade(7*0.05, lighten(0.15, secondary)),
    800: shade(8*0.05, lighten(0.15, secondary)),
    900: shade(9*0.05, lighten(0.15, secondary))
  },
  'secondary-tints': {
    100: tint(9*0.1, secondary),
    200: tint(8*0.1, secondary),
    300: tint(7*0.1, secondary),
    400: tint(6*0.1, secondary),
    500: tint(5*0.1, secondary),
    600: tint(4*0.1, secondary),
    700: tint(3*0.1, secondary),
    800: tint(2*0.1, secondary),
    900: tint(1*0.1, secondary)
  }
};

/** Spacing with understandable keys */
export const space: Space = {
  none: 0,
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 64,
  xxl: 128,
  giant: 256
}

/** this theme uses Inter free google font in both body and headings */
export const fonts: FontFamily = {
  headings: 'Inter, Open-Sans, Helvetica, Arial, Sans-Serif;',
  paragraphs: 'Inter, Open-Sans, Helvetica, Arial, Sans-Serif;',
  mono: 'Mono',
  serif: 'athelas, georgia, times, serif',
};

/** fontSizes for this theme. They are modular */
export const fontSizes: Array<string> = [
  // 12, 14, 16, 20, 24, 32, 48, 64, 96
  modularScale(-1), // 0
  modularScale(0), // 1
  modularScale(1), // 2
  modularScale(2), // 3
  modularScale(2.7), // 4
  modularScale(3.3), // 5
  modularScale(4) // 6
];

/** Radio value */
export const radii: string = '.25rem';

/** Theme */
const theme: PresetTheme = {
  colors,
  space,
  fonts,
  fontSizes,
  radii,
};

export default theme;