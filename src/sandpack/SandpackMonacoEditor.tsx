import type { SandpackFile } from '@codesandbox/sandpack-react';
import Editor, { OnChange, OnMount } from '@monaco-editor/react';
import { AutoTypings, LocalStorageCache } from 'monaco-editor-auto-typings';
import React, { FC } from 'react';

import {
  mainFile,
  reactTypescriptCustomSetup,
} from './ReactTypescriptTemplate';

export const SandpackMonacoEditor: FC = () => {
  //const { code, updateCode } = useActiveCode();

  const onCodeChange: OnChange = (value, ev) => {
    //updateCode(value || '')
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2016,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    });

    if (reactTypescriptCustomSetup.files) {
      for (const key in reactTypescriptCustomSetup.files) {
        const file = reactTypescriptCustomSetup.files[key] as SandpackFile;

        //monaco.editor.createModel(file.code, undefined, monaco.Uri.file(key));
      }
    }

    AutoTypings.create(editor, {
      sourceCache: new LocalStorageCache(), // Cache loaded sources in localStorage. May be omitted
      // Other options...
    });
  };

  return (
    <Editor
      defaultValue={mainFile}
      onMount={handleEditorDidMount}
      height="200px"
      defaultLanguage="typescript"
      onChange={onCodeChange}
    />
  );
};
