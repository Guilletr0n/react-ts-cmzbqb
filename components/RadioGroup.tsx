import * as React from 'react';
import Checkbox from './form_inputs/CheckBox'
import { RadioGroupOptions } from '../interfaces/types'


export default function RadioGroup(props:RadioGroupOptions) {
  return (
    <div className="radio-group">
      <h6 className="radio-group--title">{props.title}</h6>
      <div className="layout-horizontal">
        {props.options.map( (option) => { return (
          <Checkbox
            name={option.name}
            value={option.value}
            checked={option.checked}
            onClick={option.onClick}
          />
        )})}
      </div>
    </div>
  )
}