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

const cssAll: { [key: string]: TextCSSProperties } = {
  paragraphStyles: {
    fontSize: 16,
    textAlign: 'right',
    marginTop: 18,
    lineHeight: 1.5,
    textShadow: '3px 3px 3px #add'
  },
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
  const [cssAll, setCSSAll] = useState<TextCSSProperties>({ fontSize: 16 });
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
        <Foldable title="Alignment">
          
          <RadioGroup
            title='Text Align'
            options={[
              {'value':'right', 'name':'text-align', checked:true, onClick:() => handleInput('textAlign', 'right')},
              {'value':'center', 'name':'text-align', onClick:() => handleInput('textAlign', 'center')},
              {'value':'left', 'name':'text-align', onClick:() => handleInput('textAlign', 'left')},
              {'value':'justify', 'name':'text-align', onClick:() => handleInput('textAlign', 'justify')}
            ]}
          />
          <label>Text Align Last</label>

          <RadioGroup
            title='Text Justify'
            options={[
              {'value':'auto', 'name':'text-justify',  onClick:() => handleInput('textJustify', 'auto')},
              {'value':'inter-word', 'name':'text-justify', onClick:() => handleInput('textJustify', 'inter-word')},
              {'value':'inter-character', 'name':'text-justify', onClick:() => handleInput('textJustify', 'inter-character')}
            ]}
          />
          
        </Foldable>

        <Foldable title="Hyphenation">
        <RadioGroup
            title='Text-overflow'
            options={[
              {'value':'auto', 'name':'text-overflow', 'checked':true, onClick:() => handleInput('TextOverflow', 'auto')},
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
            title='white-space'
            options={[
              {'value':'normal', 'name':'text-overflow', 'checked':true, onClick:() => handleInput('TextOverflow', 'auto')},
              {'value':'nowrap', 'name':'text-overflow', onClick:() => handleInput('TextOverflow', 'no-wrap')},
              {'value':'pre-line', 'name':'text-overflow', onClick:() => handleInput('TextOverflow', 'pre-line')},
              {'value':'pre-wrap', 'name':'text-overflow', onClick:() => handleInput('TextOverflow', 'pre-wrap')},
            ]}
          />

          <SelectInput
            selected={cssAll['whiteSpace']}
            values={['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']}
            onInput={(value) => handleInput('whiteSpace', value)}
          />
          <p>Word Break</p>
          <SelectInput
            selected={cssAll['wordBreak']}
            values={['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']}
            onInput={(value) => handleInput('wordBreak', value)}
          />
          <p>Word Spacing</p>
          <InputNumber
            value={cssAll['wordSpacing']}
            name="word-spacing"
            onInput={(value) => handleInput('wordSpacing', parseInt(value))}
          />
          <p>Word Wrap</p>
          <SelectInput
            selected="normal"
            values={['normal', 'break-word']}
            onInput={(value) => handleInput('wordBreak', value)}
          />
          <p>Widows</p>
          <InputNumber
            value={cssAll['widows']}
            name="widows"
            onInput={(value) => handleInput('widows', parseInt(value))}
          />
          <p>Orphans</p>
          <InputNumber
            value={cssAll['orphans']}
            name="orphans"
            onInput={(value) => handleInput('orphans', parseInt(value))}
          />
        </Foldable>

        <Foldable title="Decoration">
          <p>Text Horizontal Shadow</p>
          <InputNumber
            value={cssAll['textDecorationThickness']}
            name="text-decoration-thickness"
            onInput={(value) => handleInput('textDecorationThickness', parseInt(value))}
          />
          <p>Text Shadow</p>
          <TextInput
            value={cssAll['textShadow']}
            name="text-shadow"
            onChange={(value) => handleStringInput('textShadow', value)}
          />
          <p>Text Decoration Line</p>
          <SelectInput
            selected={cssAll['textDecorationLine']}
            values={['none', 'underline', 'overline', 'line-through']}
            onInput={(value) => handleInput('textDecorationLine', value)}
          />
        </Foldable>

        <Foldable title="Size">
          <p>
            Value:{selected} {cssAll['fontSize']} {cssAll['textAlign']}
          </p>
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
            onInput={(value) =>
              handleNumberInput('lineHeight', parseInt(value), 0.1)
            }
          />
          <InputNumber
            value={cssAll['letterSpacing']}
            name="letter-spacing"
            onInput={(value) => handleInput('letterSpacing', parseInt(value))}
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

        <p>Text Transform</p>
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
