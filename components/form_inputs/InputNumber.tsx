import * as React from 'react';

interface InputProps {
  value: string | number;
  name: string;
  step?: number;
  onInput: (value: string | number) => void;
}

const InputNumber: React.FC<InputProps> = (props) => {
  return (
    <div className="InputNumberComp">
      <label htmlFor={props.name}>{props.name}</label>
      <input
        value={props.value}
        name={props.name}
        type="number"
        step={props.step}
        onInput={(e) => props.onInput(e.currentTarget.value)}
      />
    </div>
  );
};

export default InputNumber;