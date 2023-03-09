import React, { useState } from 'react';

type FoldedContent = {
  children: React.ReactNode,
  title: string
}

export default function Foldable(props:FoldedContent) {
  const [folded, setfold] = useState(false);
  const [isClosed, setClass] = useState(false);
  const handleClick = () => {
    setfold(!folded);
    setClass(!isClosed)
  }
  return (
    <React.Fragment>
      {/* <span className={isClosed ? 'foldable--indicator is-open':'foldable--indicator is-closed'}>❯</span> */}
      <h5 className={isClosed? 'interactive is-open':'interactive is-closed'} onClick={handleClick}>{props.title}</h5>
      <div className={isClosed ? 'fold-area is-open':'fold-area'}>
        { props.children }
      </div>
    </React.Fragment>
  )
}