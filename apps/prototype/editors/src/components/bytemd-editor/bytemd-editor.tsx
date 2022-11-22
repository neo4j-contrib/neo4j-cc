import gfm from '@bytemd/plugin-gfm';
import { Editor, Viewer } from '@bytemd/react';
import { useState } from 'react';

import 'bytemd/dist/index.css'
import './bytemd-editor.css'

const plugins = [
  gfm(),
  // Add more plugins here
];

export const BytemdEditor = () => {
  const [value, setValue] = useState('');

  return (
    <div className="">
    <div className="prose">
      <h1 className="">ByteMD Editor</h1>
      <p>ByteMD is a Markdown editor component built with Svelte. It could also be used in other libraries/frameworks such as React, Vue and Angular.
        <a href="https://bytemd.js.org">Read more</a>.</p>
    </div>
    <Editor
      value={value}
      plugins={plugins}
      onChange={(v) => {
        setValue(v);
      }}
    />
    </div>
  );
};
