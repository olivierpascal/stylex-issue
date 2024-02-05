import React from 'react';
import * as stylex from '@stylexjs/stylex';

import { tokens } from './Test2.stylex';

const styles = stylex.create({
  host: {
    backgroundColor: tokens.container,
    color: tokens.text,
    padding: '1rem',
  },
});

export const Test2: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div {...stylex.props(styles.host)}>{children}</div>;
