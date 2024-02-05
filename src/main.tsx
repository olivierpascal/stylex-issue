import React from 'react';
import ReactDOM from 'react-dom/client';

import { Presentation } from './Presentation';
import { Test1 } from './Test1';
import { Test2 } from './Test2';
import { Test3 } from './Test3';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Presentation>
      <Test1>
        <p>
          Test 1 - it works because the component directly uses tokens from
          theme/colorRoles.stylex.ts
        </p>
      </Test1>

      <Test2>
        <p>
          Test 2 - it does NOT work because the component uses intermediate
          tokens from Test2/Test2.stylex.ts, see{' '}
          <a href="https://github.com/facebook/stylex/issues/162#issuecomment-1853775396">
            #162 (comment from @nmn)
          </a>
        </p>
      </Test2>

      <Test3>
        <p>
          Test 3 - it works using the workaround{' '}
          <a href="https://github.com/facebook/stylex/issues/162#issuecomment-1853775396">
            #162 (comment from @nmn)
          </a>
        </p>
        <p>But the workaround has a problem: see Test3.tsx:15</p>
        <p>
          The component need to re-assign the values of its tokens to the new
          local values of theme tokens.
        </p>
        <p>
          There is no way to share the theme vars without copy/pasting them.
        </p>
        <p>
          Using createTheme() is not allowed in Test3.stylex.ts, and create side
          effects.
        </p>
      </Test3>
    </Presentation>
  </React.StrictMode>
);
