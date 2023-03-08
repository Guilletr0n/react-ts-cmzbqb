import * as React from 'react';
import { CSSProperties } from 'react';
import { TextCSSProperties } from '../interfaces/PreviewProps';
import type { ParagraphProps } from '../interfaces/PreviewProps';
import { useState } from 'react';
import { useEffect } from 'react';

const Preview: React.FC<ParagraphProps> = (props) => {

const [styles, setStyle] = useState(props.previewStyle);
const [containerStyles, setContainerStyles] = useState(props.containerOptions)
const fontSize = props['fontSize']; 
const {...allStyles} = props.previewStyle;
const allContainerStyles = { 
  width:props.containerOptions.width + '%',
  height:props.containerOptions.height + '%'
}

useEffect( () => { 
  
},[props] );

  return (
    <div className="preview-wrap" style={allContainerStyles}>
      <p contentEditable="true" className="preview" style={allStyles}>The <em>CSS Text Playground</em> allows you to test quick and easily all CSS properties related to font and text.
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </div>
  )
}

export default Preview;