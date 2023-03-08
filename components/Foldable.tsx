import React, { useState } from 'react';

type FoldedContent = {
  children: React.ReactNode,
  title: string
}

export default function Foldable(props:FoldedContent) {
  const [folded, setfold] = useState(false);
  const [isfolded, setClass] = useState(false);
  const handleClick = () => {
    setfold(!folded);
    setClass(!isfolded)
  }
  return (
    <React.Fragment>
      <span className={isfolded ? 'foldable--indicator is-open':'foldable--indicator is-closed'}>❯</span>
      <h5 className="interactive" onClick={handleClick}>{props.title}</h5>
      <div className={isfolded ? 'fold-area is-folded':'fold-area'}>
        { props.children }
      </div>
    </React.Fragment>
  )
}