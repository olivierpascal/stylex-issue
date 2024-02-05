import React from 'react';
import * as stylex from '@stylexjs/stylex';

import { tokens } from './Test3.stylex';
import { colorRoles } from '../theme/colorRoles.stylex';

const styles = stylex.create({
  host: {
    backgroundColor: tokens.container,
    color: tokens.text,
    padding: '1rem',
  },
});

// Problem here:
const componentTheme = stylex.createTheme(
  tokens,
  // This object is copied from Test3.stylex.ts.
  // There is no way to share it, without copy/pasting it.
  // Using createTheme() is not allowed in Test3.stylex.ts, and create side effects.
  {
    container: colorRoles.surface,
    text: colorRoles.onSurface,
  }
);

export const Test3: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div {...stylex.props(styles.host, componentTheme)}>{children}</div>;
