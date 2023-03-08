import * as React from 'react';

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <input type="text"
      value={props.value}
      name={props.name}
      onChange={(e)=> props.onChange(e.currentTarget.value)}
    />  
  )
}

export default TextInput;