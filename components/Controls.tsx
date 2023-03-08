import * as React from 'react';
import { useState, useEffect } from 'react';
import Preview from './Preview';
import Foldable from './Foldable';
import { TextCSSProperties } from '../interfaces/PreviewProps';
import Select from 'react-select';
import CheckBox from './form_inputs/CheckBox';
import RadioGroup from './RadioGroup';
import InputNumber from './form_inputs/InputNumber';
import SelectInput from './form_inputs/SelectInput';
import TextInput from './form_inputs/TextInput';
import { containerProps } from '../interfaces/PreviewProps';

interface SelectProps {
  values: string[];
  selected: string;
  onInput: (value: string) => void;
}

interface TextInputProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
}

const defaultPreview = {
  fontSize: 22,
  marginTop: '18px',
  lineHeight: 1.5,
  textShadow: '2px 2px 2px #ddd',
  hyphens: 'auto',
  textAlign: 'left',
}

const cssAll: { [key: string]: TextCSSProperties } = {
  paragraphStyles: defaultPreview
};

const selectStyles = {
  control:(baseStyles, state) => ({
    ...baseStyles,
    borderColor: '#add',
    backgroundColor: 'transparent',
    maxWidth: '150px',
    fontSize: '12px',
    padding: '2px'
  }),
  menu:(baseStyles, state) => ({
    ...baseStyles,
    maxWidth: '150px',
    borderColor: '#add',
    backgroundColor: 'rgba(0,50,50,0.95)',
    borderRadius: 0,
    fontSize: '12px'
  })
}

const previewOptions = {
  width: 300,
  height: 500
}

const CheckboxGroup: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [value, setValue] = useState<string | number>(16);
  const [cssAll, setCSSAll] = useState<TextCSSProperties>( defaultPreview );
  const [previewOptions, setPreviewOptions] = useState<containerProps>({width:300, height: 500})
  const handleInput = (property: string, value: string) => {
    let newCSS: TextCSSProperties = { ...cssAll };
    newCSS[property] = value;
    setCSSAll(newCSS);
  };
  const handleNumberInput = (property: string, value: number, step: number) => {
    let newCSS: TextCSSProperties = { ...cssAll };
    newCSS[property] = value * step;
    setCSSAll(newCSS);
  };
  const handleStringInput = (property: string, value: string) => {
    let newCSS: TextCSSProperties = { ...cssAll};
    newCSS[property] = value;
    setCSSAll(newCSS)
  }
  const handleComplexInput = (property: string, value: [string]) => {
    let newCSS: TextCSSProperties = { ...cssAll };
    newCSS[property] = value.join(' ');
    setCSSAll(newCSS)
  }
  const handleSelect = (value) => {
    console.log(value);
  }
  const handleWidthRangeChange = (value) => {
    setPreviewOptions({width:(value)})
  }
  const handleHeightRangeChange = (value) => {
    setPreviewOptions({height:(value)})
  }
  return (
    <div className="container">
      <div className="control-panel">
        <Foldable title="Container Width">
          <label>Width</label>
          <input type='range' onChange={(e)=>handleWidthRangeChange(e.currentTarget.value)}/>
          <br/>
          <label>Height</label>
          <input type='range' onChange={(e)=>handleHeightRangeChange(e.currentTarget.value)}/>
        </Foldable>
        
        <Foldable title="Size">
          <InputNumber
            value={cssAll['fontSize']}
            name="font-size"
            onInput={(value) => handleInput('fontSize', parseInt(value))}
          />
        </Foldable>

        <Foldable title="Spacing">
          <InputNumber
            value={cssAll['textIndent']}
            name="text-indent"
            onInput={(value) => handleInput('textIndent', parseInt(value))}
          />
          <InputNumber
            value={Math.round(cssAll['lineHeight'] * 10)}
            name="line-height"
            onInput={(value) => handleNumberInput('lineHeight', parseInt(value), 0.1)
            }
          />
          <InputNumber
            value={cssAll['letterSpacing']}
            name="letter-spacing"
            onInput={(value) => handleInput('letterSpacing', parseInt(value))}
          />
          <InputNumber
            value={cssAll['wordSpacing']}
            name="word-spacing"
            onInput={(value) => handleInput('wordSpacing', parseInt(value))}
          />
          <InputNumber
            value={cssAll['lineheight']}
            name="letter-spacing"
            onInput={(value) => handleInput('letterSpacing', parseInt(value))}
          />
          <InputNumber
            value={cssAll['marginTop']}
            name="margin-top"
            onInput={(value) => handleInput('marginTop', parseInt(value))}
          />
          <InputNumber
            value={cssAll['marginBottom']}
            name="margin-bottom"
            onInput={(value) => handleInput('marginBottom', parseInt(value))}
          />
          <InputNumber
            value={cssAll['marginLeft']}
            name="margin-left"
            onInput={(value) => handleInput('marginLeft', parseInt(value))}
          />
          <InputNumber
            value={cssAll['marginRight']}
            name="margin-right"
            onInput={(value) => handleInput('marginRight', parseInt(value))}
          />
        </Foldable>

        <Foldable title="Alignment">
          
          <RadioGroup
            title='Text Align'
            options={[
              {'value':'left', 'name':'text-align', checked:true, onClick:() => handleInput('textAlign', 'left')},
              {'value':'center', 'name':'text-align', onClick:() => handleInput('textAlign', 'center')},
              {'value':'right', 'name':'text-align', onClick:() => handleInput('textAlign', 'right')},
              {'value':'justify', 'name':'text-align', onClick:() => handleInput('textAlign', 'justify')}
            ]}
          />
          
          <RadioGroup
            title='Text Align Last'
            options={[
              {'value':'left', 'name':'text-align-last', 'checked': true, onClick:() => handleInput('textAlignLast', 'left')},
              {'value':'center', 'name':'text-align-last', onClick:() => handleInput('textAlignLast', 'center')},
              {'value':'right', 'name':'text-align-last', onClick:() => handleInput('textAlignLast', 'right')}
            ]}
          />

          <RadioGroup
            title='Text Justify'
            options={[
              {'value':'auto', 'name':'text-justify', 'checked': true, onClick:() => handleInput('textJustify', 'auto')},
              {'value':'inter-word', 'name':'text-justify', onClick:() => handleInput('textJustify', 'inter-word')},
              {'value':'inter-character', 'name':'text-justify', onClick:() => handleInput('textJustify', 'inter-character')}
            ]}
          />
          
        </Foldable>

        <Foldable title="Hyphenation">
          <RadioGroup
            title="overflow"
            options={[
              {'value':'visible', 'name':'overflow', onClick:() => handleInput('overflow', 'visible')},
              {'value':'hidden', 'name':'overflow', 'checked': true, onClick:() => handleInput('overflow', 'hidden')},
              {'value':'clip', 'name':'overflow', onClick:() => handleInput('overflow', 'clip')},
              {'value':'scroll', 'name':'overflow', onClick:() => handleInput('overflow', 'scroll')},
              {'value':'auto', 'name':'overflow', onClick:() => handleInput('overflow', 'auto')}
            ]}
          />
        <RadioGroup
            title='Text-overflow'
            options={[
              {'value':'auto', 'name':'text-overflow', 'checked': true, onClick:() => handleInput('TextOverflow', 'auto')},
              {'value':'manual', 'name':'text-overflow', onClick:() => handleInput('TextOverflow', 'manual')},
              {'value':'none', 'name':'text-overflow', onClick:() => handleInput('TextOverflow', 'none')}
            ]}
          />
          <InputNumber
            value={cssAll['textOverflow']}
            name="text-overflow"
            onInput={(value) => handleInput('textOverflow', parseInt(value))}
          />
         <RadioGroup
           title="hyphens"
           options={[
             {'value':'auto', 'name':'hyphens', 'checked': true, onClick:() => handleInput('hyphens', 'auto')},
             {'value':'none', 'name':'hyphens', onClick:() => handleInput('hyphens', 'none')},
             {'value':'manual', 'name':'hyphens', onClick:() => handleInput('hyphens', 'manual')}
           ]}/>
         <RadioGroup
            title='white-space'
            options={[
              {'value':'normal', 'name':'white-space', 'checked':true, onClick:() => handleInput('whiteSpace', 'auto')},
              {'value':'nowrap', 'name':'white-space', onClick:() => handleInput('whiteSpace', 'no-wrap')},
              {'value':'pre-line', 'name':'white-space', onClick:() => handleInput('whiteSpace', 'pre-line')},
              {'value':'pre-wrap', 'name':'white-space', onClick:() => handleInput('whiteSpace', 'pre-wrap')},
            ]}
          />
          <RadioGroup
            title='word-break'
            options={[
              {'value':'normal', 'name':'word-break', 'checked': true, onClick:() => handleInput('wordBreak','normal')},
              {'value':'break-all', 'name':'word-break', onClick:() => handleInput('wordBreak','break-all')},
              {'value':'keep-all', 'name':'word-break', onClick:() => handleInput('wordBreak','keep-all')},
              {'value':'break-word', 'name':'word-break', onClick:() => handleInput('wordBreak','break-word')}
            ]}
          />
          <RadioGroup
            title='word-Wrap'
            options={[
              {'value':'normal', 'name':'word-wrap', onClick:() => handleInput('wordWrap','normal')},
              {'value':'break-word', 'name':'word-wrap', onClick:() => handleInput('wordWrap','break-word')}
            ]}
          />
          <InputNumber
            value={cssAll['widows']}
            name="widows"
            onInput={(value) => handleInput('widows', parseInt(value))}
          />
          <InputNumber
            value={cssAll['orphans']}
            name="orphans"
            onInput={(value) => handleInput('orphans', parseInt(value))}
          />
        </Foldable>

        <Foldable title="Decoration">
          <InputNumber
            value={cssAll['textDecorationThickness']}
            name="text-decoration-thickness"
            onInput={(value) => handleInput('textDecorationThickness', parseInt(value))}
          />
          <RadioGroup
            title="text-decoration-line"
            options={[
              {'name':'text-decoration-line', 'value':'none', onClick:()=> handleInput('text-decoration-line','none')},
              {'name':'text-decoration-line', 'value':'underline', onClick:()=> handleInput('text-decoration-line','underline')},
              {'name':'text-decoration-line', 'value':'overline', onClick:()=> handleInput('text-decoration-line','overline')},
              {'name':'text-decoration-line', 'value':'line-through', onClick:()=> handleInput('text-decoration-line','line-through')}
            ]}/>
          <TextInput
            value={cssAll['textShadow']}
            name="text-shadow"
            onChange={(value) => handleStringInput('textShadow', value)}
          />
          <SelectInput
            selected={cssAll['textDecorationLine']}
            values={['none', 'underline', 'overline', 'line-through']}
            onInput={(value) => handleInput('textDecorationLine', value)}
          />
        </Foldable>

        <Foldable title="Font">
          <p>Family</p>
          <SelectInput
            selected={cssAll['fontFamily']}
            values={['Inter', 'Fira Sans']}
            onInput={(value) => handleInput('fontFamily', value)}
          />
          <p>Ligatures</p>
          <SelectInput
            selected={cssAll['fontVariantLigatures']}
            values={['normal', 'no-common-ligatures', 'ligatures']}
            onInput={(value) => handleInput('fontVariantLigatures', value)}
          />
          <p>Font Variant Caps</p>
          <SelectInput
            selected={cssAll['common-ligatures']}
            values={['normal', 'small-caps', 'all-small-caps']}
            onInput={(value) => handleInput('fontVariantCaps', value)}
          />
        </Foldable>

        <SelectInput
          selected={cssAll['textTransform']}
          values={['uppercase', 'lowercase', 'capitalize', 'none']}
          onInput={(value) => handleInput('textTransform', value)}
        />
      </div>

      <div className="preview-panel">
        <Preview previewStyle={cssAll} containerOptions={previewOptions}/>
      </div>
    </div>
  );
};

export default CheckboxGroup;
