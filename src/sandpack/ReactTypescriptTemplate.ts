import type { SandpackSetup } from '@codesandbox/sandpack-react';

export const mainFile = `import React, { FC } from "react";

export const Main: FC = () => {
    const buttonClick = () => {
        window.parent.postMessage({ type: 'click', message: { element: 'button' }}, '*')
    }

    return <button onClick={buttonClick}>Trigger event</button>
}`;

export const reactTypescriptCustomSetup: SandpackSetup = {
  entry: '/src/index.tsx',
  main: '/src/main.tsx',
  dependencies: {
    react: 'latest',
    'react-dom': 'latest',
    'react-scripts': '4.0.0',
  },
  files: {
    'package.json': {
      code: `
      {
        "name": "react-typescript",
        "version": "1.0.0",
        "description": "React and TypeScript example starter project",
        "keywords": [
          "typescript",
          "react",
          "starter"
        ],
        "main": "src/index.tsx",
        "dependencies": {
          "react": "17.0.2",
          "react-dom": "17.0.2",
          "react-scripts": "4.0.0"
        },
        "devDependencies": {
          "@types/react": "17.0.0",
          "@types/react-dom": "17.0.0",
          "typescript": "4.1.3"
        },
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test --env=jsdom",
          "eject": "react-scripts eject"
        },
        "browserslist": [
          ">0.2%",
          "not dead",
          "not ie <= 11",
          "not op_mini all"
        ]
      }
      `
    },
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
      code: mainFile,
    },
  },
};
