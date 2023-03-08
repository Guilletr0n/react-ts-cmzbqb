import * as React from 'react';

const SelectInput: React.FC<SelectProps> = (props) => {
  return (
    <select
      value={props.selected}
      onChange={(e) => props.onInput(e.currentTarget.value)}
    >
      {props.values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;

// Example

{/* <Select
  styles={selectStyles}
  options={[
    {'label':'right','value':'right'},
    {'label':'center','value':'center'},
    {'label':'left','value':'left'}
  ]}
  onChange={(selectedOption) => handleInput('textAlignLast', selectedOption.value) }
/> */}