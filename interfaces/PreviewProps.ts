import { CSSProperties } from 'react';

export interface ParagraphProps {
  previewStyle:TextCSSProperties;
  containerOptions: ContainerProps;
  content: PreviewContent;
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
  hyphens: string,
  columnWidth: string
}

export interface ContainerProps {
  width: number;
  height: number
}

export interface PreviewContent {
  rawContent: string
}