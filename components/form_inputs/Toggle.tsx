import * as React from 'react';
import CheckBox from './CheckBox';

interface ToggleProps {
  value?: boolean;
  name: string;
  onToggle: (e) => void;
}

const Toggle: React.FC<ToggleProps> = (props) => {
  const { value, name, onClick } = props;
  return (
    <React.Fragment>
      <label htmlFor={`${props.name}_id`}>{props.name}</label>
      <input id={`${props.name}_id`}
       type="checkbox"
       checked={value}
       onChange={(e)=> props.onToggle(e.currentTarget)}
      />
    </React.Fragment>
  )
}

export default Toggle