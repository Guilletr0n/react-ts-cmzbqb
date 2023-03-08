import { CSSProperties } from 'react';

export interface ParagraphProps {
  previewStyle:TextCSSProperties;
  containerOptions: containerProps;
}

export interface CSSHyphenValues {
  values : {
    none: string,
    manual: string,
    auto: string,
  }
}

export enum CSSHyphen {
  none,
  manual,
  auto
}

export interface TextCSSProperties extends React.CSSProperties {
  textShadow: string,
  fontSize: string,
  textAlign: string,
  marginTop: string,
  lineHeight: number,
  hyphens: string
}

export interface containerProps {
  width: number;
  height: number
}