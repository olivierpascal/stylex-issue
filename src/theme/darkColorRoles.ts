import * as stylex from '@stylexjs/stylex';

import { colorRoles } from './colorRoles.stylex';

export const darkColorRoles = stylex.createTheme(colorRoles, {
  surface: 'black',
  onSurface: 'white',
});
