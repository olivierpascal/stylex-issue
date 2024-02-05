import * as stylex from '@stylexjs/stylex';

import { colorRoles } from '../theme/colorRoles.stylex';

export const tokens = stylex.defineVars({
  container: colorRoles.surface,
  text: colorRoles.onSurface,
});
