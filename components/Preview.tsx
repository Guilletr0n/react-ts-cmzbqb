import * as React from 'react';
import { CSSProperties } from 'react';
import { TextCSSProperties } from '../interfaces/PreviewProps';
import type { ParagraphProps } from '../interfaces/PreviewProps';
import { useState } from 'react';
import { useEffect } from 'react';

const Preview: React.FC<ParagraphProps> = (props) => {
//const [content, setContent] = useState(props.previewContent);
const {...allStyles} = props.previewStyle;
const content:String = props.content.rawContent;
const allContainerStyles = { 
  width:props.containerOptions.width + '%',
  height:props.containerOptions.height + '%'
}

useEffect( () => { 
  
},[props] );

  return (
    <div className="preview-wrap" style={allContainerStyles}>
      <p contentEditable="true" className="preview" style={allStyles}>{content}</p>
    </div>
  )
}

export default Preview;