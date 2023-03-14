import * as React from 'react';
import { CSSProperties } from 'react';
import { TextCSSProperties } from '../interfaces/PreviewProps';
import type { ParagraphProps } from '../interfaces/PreviewProps';
import { useState } from 'react';
import { useEffect } from 'react';

const Preview: React.FC<ParagraphProps> = (props) => {
//const [content, setContent] = useState(props.previewContent);
const {...allStyles} = props.previewStyle;
const content:string = props.content.rawContent;
const cssCode:string = props.cssCode.rawContent;
const viewMode:boolean = props.viewMode;
const allContainerStyles = { 
  width:props.containerOptions.width + '%',
  height:props.containerOptions.height + '%'
}

useEffect( () => { 
  
},[props] );

  return (
    <div className="preview-wrap" style={allContainerStyles}>
      <pre className={viewMode? `css-code is--visible`:`css-code`}>{cssCode}</pre>
      <p contentEditable="true" className={viewMode? `preview`:`preview is--visible`} style={allStyles}>{content}</p>
    </div>
  )
}

export default Preview;