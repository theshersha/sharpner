import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';
const  RichTextEditor = ({setValue,config}) =>{
    const editor =useRef(null);

  return (

    <div>
        <JoditEditor ref={editor} onChange={content=>setValue(content)} config={config}/>
    </div>
  );
}

export default RichTextEditor;