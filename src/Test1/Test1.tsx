import React from 'react';
import * as stylex from '@stylexjs/stylex';

import { colorRoles } from '../theme/colorRoles.stylex';

const styles = stylex.create({
  host: {
    backgroundColor: colorRoles.surface,
    color: colorRoles.onSurface,
    padding: '1rem',
  },
});

export const Test1: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div {...stylex.props(styles.host)}>{children}</div>;
