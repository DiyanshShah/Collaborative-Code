import { Editor as MonacoEditor, type OnMount } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco";
import * as Y from 'yjs'
import { WebsocketProvider } from "y-websocket";

const ydoc = new Y.Doc();




interface EditorProps {
    roomId: string;
}

function Editor ({roomId} : EditorProps) {

    const provider = new WebsocketProvider(
        'ws://localhost:1234',
        roomId,
        ydoc
    );
    const handleEditorMount: OnMount = (editor, monaco) => {
        const yText = ydoc.getText('monaco');

        const monacoBinding = new MonacoBinding(
            yText, 
            editor.getModel()!,
            new Set([editor]),
            provider.awareness
        )
    }
  
    return (
        <div className="w-full">
          <MonacoEditor
            height="calc(100vh - 60px)" 
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue="// Welcome to the collaborative editor!"
            onMount={handleEditorMount}
          />
        </div>
      );
};

export default Editor