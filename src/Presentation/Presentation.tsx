import React from 'react';
import * as stylex from '@stylexjs/stylex';

import { darkColorRoles } from '../theme/darkColorRoles';

const styles = stylex.create({
  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '4rem',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  left: {
    borderRightWidth: 2,
    borderRightStyle: 'solid',
    borderRightColor: '#ccc',
  },
  right: {},
  panelLegend: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 0,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: '#ccc',
    padding: '1rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  panelContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    maxWidth: '400px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: '10px',
  },
});

export const Presentation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <React.Fragment>
    <div {...stylex.props(styles.panel, styles.left)}>
      <div {...stylex.props(styles.panelLegend)}>Light mode</div>
      <div {...stylex.props(styles.center)}>
        <div {...stylex.props(styles.panelContent)}>{children}</div>
      </div>
    </div>
    <div {...stylex.props(styles.panel, styles.right, darkColorRoles)}>
      <div {...stylex.props(styles.panelLegend)}>Dark mode</div>
      <div {...stylex.props(styles.center)}>
        <div {...stylex.props(styles.panelContent)}>{children}</div>
      </div>
    </div>
  </React.Fragment>
);
