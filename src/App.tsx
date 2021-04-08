import React, { FC } from 'react';
import './App.css';

const code = `
export default function App() {
 const { dispatch } = useSandpackEvents
 const buttonClick = () => {
       dispatch({ type: 'click', message: { text: 'Hello from code' }
 }
  return <button onClick={buttonClick}>Trigger event</button>
}`;

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider
} from '@codesandbox/sandpack-react';

import '@codesandbox/sandpack-react/dist/index.css';
import { SandpackListener } from './SandpackListener';
import { reactTypescriptCustomSetup } from './sandpack';

const App: FC = () => {
  return (
    <div className="App">
      <SandpackProvider customSetup={reactTypescriptCustomSetup}>
        <SandpackLayout>
          <SandpackCodeEditor />
          <SandpackListener />
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default App;
