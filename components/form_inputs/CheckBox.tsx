import * as React from 'react'

interface CheckboxProps {
  value: string;
  name: string;
  checked?: boolean;
  onClick: () => void;
}

const CheckBox: React.FC<CheckboxProps> = (props) => {
  const { value, onClick, checked } = props;
  return (
    <div>
      <label htmlFor={`${props.value}_id`}>{value}
        <input id={`${props.value}_id`} name={props.name} type="radio" value={value} defaultChecked={checked} onClick={onClick} />
      </label>
    </div>
  );
};

export default CheckBox