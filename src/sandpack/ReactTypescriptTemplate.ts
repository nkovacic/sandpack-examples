import type { SandpackSetup } from '@codesandbox/sandpack-react';

export const reactTypescriptCustomSetup: SandpackSetup = {
  entry: '/src/index.tsx',
  main: '/src/main.tsx',
  dependencies: {
    react: 'latest',
    'react-dom': 'latest',
    'react-scripts': '4.0.0',
  },
  files: {
    './tsconfig.json': {
      code: `{
  "include": [
    "./src/**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [
      "dom",
      "es2015"
    ],
    "jsx": "react"
  }
  }`,
      hidden: true,
    },
    '/public/index.html': {
      code: `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  <div id="root"></div>
  </body>
  </html>`,
      hidden: true,
    },

    '/src/index.tsx': {
      code: `import * as React from "react";
  import { render } from "react-dom";
  import { Main } from "./main";
  const rootElement = document.getElementById("root");
  render(<Main/>, rootElement);
          `,
      hidden: true,
    },

    '/src/main.tsx': {
      code: `import React, { FC } from "react";
    export const Main: FC = () => {
        const buttonClick = () => {
            window.parent.postMessage({ type: 'click', message: { element: 'button' }})
        }

        return <button onClick={buttonClick}>Trigger event</button>
    }`,
    },
  },
};
