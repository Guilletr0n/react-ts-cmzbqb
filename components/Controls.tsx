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
import { ContainerProps, PreviewContent } from '../interfaces/PreviewProps';

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

const defaultPreview:TextCSSProperties = {
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

const previewRawContents:PreviewContent[] = [
  {rawContent: 'This CSS Text generator is a quick and easy way to explore css properties that affect to text and fonts. Open the panels at left and change the values to preview how it affects to this text '},
  {rawContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'},
  {rawContent: `You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.

  I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my daydreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is for ever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There&mdash;for with your leave, my sister, I will put some trust in preceding navigators&mdash;there snow and frost are banished; and, sailing over a calm sea, we may be wafted to a land surpassing in wonders and in beauty every region hitherto discovered on the habitable globe. Its productions and features may be without example, as the phenomena of the heavenly bodies undoubtedly are in those undiscovered solitudes. What may not be expected in a country of eternal light? I may there discover the wondrous power which attracts the needle and may regulate a thousand celestial observations that require only this voyage to render their seeming eccentricities consistent for ever. I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man. These are my enticements, and they are sufficient to conquer all fear of danger or death and to induce me to commence this laborious voyage with the joy a child feels when he embarks in a little boat, with his holiday mates, on an expedition of discovery up his native river. But supposing all these conjectures to be false, you cannot contest the inestimable benefit which I shall confer on all mankind, to the last generation, by discovering a passage near the pole to those countries, to reach which at present so many months are requisite; or by ascertaining the secret of the magnet, which, if at all possible, can only be effected by an undertaking such as mine.
  
  These reflections have dispelled the agitation with which I began my letter, and I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillise the mind as a steady purpose&mdash;a point on which the soul may fix its intellectual eye. This expedition has been the favourite dream of my early years. I have read with ardour the accounts of the various voyages which have been made in the prospect of arriving at the North Pacific Ocean through the seas which surround the pole. You may remember that a history of all the voyages made for purposes of discovery composed the whole of our good Uncle Thomas&rsquo; library. My education was neglected, yet I was passionately fond of reading. These volumes were my study day and night, and my familiarity with them increased that regret which I had felt, as a child, on learning that my father&rsquo;s dying injunction had forbidden my uncle to allow me to embark in a seafaring life.
  
  These visions faded when I perused, for the first time, those poets whose effusions entranced my soul and lifted it to heaven. I also became a poet and for one year lived in a paradise of my own creation; I imagined that I also might obtain a niche in the temple where the names of Homer and Shakespeare are consecrated. You are well acquainted with my failure and how heavily I bore the disappointment. But just at that time I inherited the fortune of my cousin, and my thoughts were turned into the channel of their earlier bent.
  
  Six years have passed since I resolved on my present undertaking. I can, even now, remember the hour from which I dedicated myself to this great enterprise. I commenced by inuring my body to hardship. I accompanied the whale-fishers on several expeditions to the North Sea; I voluntarily endured cold, famine, thirst, and want of sleep; I often worked harder than the common sailors during the day and devoted my nights to the study of mathematics, the theory of medicine, and those branches of physical science from which a naval adventurer might derive the greatest practical advantage. Twice I actually hired myself as an under-mate in a Greenland whaler, and acquitted myself to admiration. I must own I felt a little proud when my captain offered me the second dignity in the vessel and entreated me to remain with the greatest earnestness, so valuable did he consider my services.
  
  And now, dear Margaret, do I not deserve to accomplish some great purpose? My life might have been passed in ease and luxury, but I preferred glory to every enticement that wealth placed in my path. Oh, that some encouraging voice would answer in the affirmative! My courage and my resolution is firm; but my hopes fluctuate, and my spirits are often depressed. I am about to proceed on a long and difficult voyage, the emergencies of which will demand all my fortitude: I am required not only to raise the spirits of others, but sometimes to sustain my own, when theirs are failing.
  
  This is the most favourable period for travelling in Russia. They fly quickly over the snow in their sledges; the motion is pleasant, and, in my opinion, far more agreeable than that of an English stagecoach. The cold is not excessive, if you are wrapped in furs&mdash;a dress which I have already adopted, for there is a great difference between walking the deck and remaining seated motionless for hours, when no exercise prevents the blood from actually freezing in your veins. I have no ambition to lose my life on the post-road between St. Petersburgh and Archangel.
  
  I shall depart for the latter town in a fortnight or three weeks; and my intention is to hire a ship there, which can easily be done by paying the insurance for the owner, and to engage as many sailors as I think necessary among those who are accustomed to the whale-fishing. I do not intend to sail until the month of June; and when shall I return? Ah, dear sister, how can I answer this question? If I succeed, many, many months, perhaps years, will pass before you and I may meet. If I fail, you will see me again soon, or never.
  
  Farewell, my dear, excellent Margaret. Heaven shower down blessings on you, and save me, that I may again and again testify my gratitude for all your love and kindness.`}
]

const CheckboxGroup: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [value, setValue] = useState<string | number>(16);
  const [cssAll, setCSSAll] = useState<TextCSSProperties>( defaultPreview );
  const [previewOptions, setPreviewOptions] = useState<ContainerProps>({width:100, height: 100});
  const [previewContent, setPreviewContent] = useState<PreviewContent>(previewRawContents[0])
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
  const handleSelect = (option) => {
    console.log(value);
    setPreviewContent(previewRawContents[option.value]);
    //console.log(value)
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
          <SelectInput
          selected={cssAll['textTransform']}
          values={['uppercase', 'lowercase', 'capitalize', 'none']}
          onInput={(value) => handleInput('textTransform', value)}
        />
        </Foldable>
        <Foldable title="Content">
          
          <Select
            options={[
              { value: 0, label: 'Welcome' },
              { value: 1, label: 'Lorem Ipsum' },
              { value: 2, label: 'Long Text' }
            ]}
            onChange={(e)=>{handleSelect(e)}}
            />
            <p>Esto</p>
            <p>solo</p>
            <p>sirve</p>
            <p>para</p>
            <p>crear</p>
            <p>espacio</p>
            <p>para</p>
            <p>poder</p>
            <p>abrir</p>
            <p>el</p>
            <p>select</p>
        </Foldable>
        
      </div>

      <div className="preview-panel">
        <Preview previewStyle={cssAll} containerOptions={previewOptions} content={previewContent}/>
      </div>
    </div>
  );
};

export default CheckboxGroup;
